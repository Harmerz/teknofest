import { io } from 'socket.io-client';
import { useEffect } from 'react';

const Data = ({ setGCS, setData, setRaw, setGyro }) => {
	let socket;

	useEffect(() => {
		socket = io(`${process.env.REACT_APP_SOCKET_URL}`);

		const callback = body => {
			setGCS(prevState => {
				return {
					portStatus: body.system?.portStatus ?? prevState.portStatus ?? false,
					missionTime: body.container?.missionTime ?? body.container?.missionTime ?? prevState.missionTime,
					packetCount: body.payload?.packetCount ?? body.container?.packetCount ?? prevState.packetCount,
					mode: body.container?.mode,
					tpReleased: body.container?.tpReleased,
					gps: {
						name: body.timestamp,
						time: body.container?.gpsTime,
						sats: body.container?.gpsSats,
						alt: body.container?.gpsAltitude ?? prevState.gps.alt ?? 0,
						lat: body.container?.gpsLatitude ?? prevState.gps.lat ?? 0,
						long: body.container?.gpsLongitude ?? prevState.gps.long ?? 0
					},
					cmdEcho: body.container?.cmdEcho,
					softwareState: {
						C: ConvertStateContainer(body.container?.softwareState),
						TP: ConvertStateTP(body.payload?.tpSoftwareState)
					},
					mqttStatus: body.system?.mqttStatus ?? prevState.mqttStatus ?? false,
					simMode: body.system?.simEnabled ?? prevState.simMode ?? false
				};
			});

			setData(prevState => {
				console.log(body);
				let newData = JSON.parse(JSON.stringify(prevState));
				newData.push({
					temp: { name: body.timestamp, C: body.container?.temp, TP: body.payload?.tpTemp },
					altitude: { name: body.timestamp, C: body.container?.altitude, TP: body.payload?.tpAltitude },
					voltage: { name: body.timestamp, C: body.container?.voltage, TP: body.payload?.tpVoltage },
					accel: {
						name: body.timestamp,
						yaw: body.payload?.accelY,
						pitch: body.payload?.accelP,
						roll: body.payload?.accelR
					},
					magnet: {
						name: body.timestamp,
						yaw: body.payload?.magY,
						pitch: body.payload?.magP,
						roll: body.payload?.magR
					},
					pe: { name: body.timestamp, TP: body.payload?.pointingError },
					gyro: {
						name: body.timestamp,
						yaw: body.payload?.gyroY,
						pitch: body.payload?.gyroP,
						roll: body.payload?.gyroR
					},
					gps: {
						name: body.timestamp,
						alt: body.container?.gpsAltitude,
						lat: body.container?.gpsLatitude,
						long: body.container?.gpsLongitude
					}
				});

				if (newData.length > 30) newData.shift();
				return newData;
			});

			setRaw(prevState => {
				console.log(body);
				let newRaw = JSON.parse(JSON.stringify(prevState));

				if (!!body.container?.rawData) newRaw.push(body.container?.rawData);
				if (!!body.payload?.rawData) newRaw.push(body.payload?.rawData);

				if (newRaw.length > 100) newRaw.shift();
				return newRaw;
			});

			setGyro(prevState => {
				return {
					yaw: body.payload?.gyroY ?? prevState.yaw,
					pitch: body.payload?.gyroP ?? prevState.pitch,
					roll: body.payload?.gyroR ?? prevState.roll
				};
			});

			// console.log('PACKET GCS 2', 'yes');
			// console.log('PACKET ARRAY 2', 'yes');
		};

		socket.on('PACKET', callback);

		return () => {
			socket.off('PACKET', callback);
		};
	}, []);
	return null;
};

const ConvertStateContainer = data => {
	return {
		STANDBY: 0,
		ASCENT: 1,
		SEPARATION: 2,
		DESCENT: 3,
		TP_RELEASED: 4,
		LANDED: 5
	}[data];
};
const ConvertStateTP = data => {
	return {
		STANDBY: 0,
		RELEASED: 1,
		TARGET_ACQUIRING: 2,
		TARGET_POINTING: 3,
		LANDED: 4
	}[data];
};

export default Data;
