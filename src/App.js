import './App.css';
import Statusbaru from './Component/statusbar'
import CardPertama from './Component/cardpertama';
import GPS from './Component/gps';
import StatusContainer from './Component/status_container';
import StatusPayload from './Component/status_payload';
import Gyro from './Component/gyro';
import CardKedua from './Component/cardkedua';
import Raw from './Component/raw';
import RawData, { isibagi } from './Component/Data/raw';
// import AltitudeLogo from './LOGO SVG/Altitude.svg';
import {GyroData,Pressure,Temperature,Voltage,Descentrate,Spinrate,AltitudeDifference,Altitude} from './Component/Data/datain';
import {Updatealtitude,Updatealtitudedifference,Updatedescentrate,Updategyro,Updatepressure,Updatespinrate,Updatetemperature,Updatevoltage} from './Component/Data/datain';
import Video from './Component/video';
import Example from './Component/example';

import AltitudeLogo from './SVG/Altitude.svg';
import DescentLogo from './SVG/Descent.svg';
import GyroLogo from './SVG/Gyro.svg';

import PressureLogo from './SVG/Pressure.svg';
import RawLogo from './SVG/Raw.svg';
import SpiningLogo from './SVG/Spining.svg';
import TemperatureLogo from './SVG/Temperature.svg';
import VoltLogo from './SVG/Volt.svg';




RawData()
function App() {
  return (
    // <Example  Isidata={AltitudeDifference} Updatedata={Updatealtitudedifference}/>
    <div class="flex-row">
      <Statusbaru/>
      <div class="flex-column" id="map-video">
        <StatusContainer/>
        <GPS/>
        <div class="flex-column">
          <div class="flex-row">
            <Video/>
            <CardPertama Logo={PressureLogo} Nama="PRESSURE" Isidata={Pressure} Updatedata={Updatepressure} />
            
          </div>
          <div class="flex-row">
            <CardPertama Logo={AltitudeLogo} Nama="ALTITUDE" Isidata={Altitude} Updatedata={Updatealtitude} />
            <CardPertama Logo={AltitudeLogo} Nama="ALTITUDE DIFFERENCE" Isidata={AltitudeDifference} Updatedata={Updatealtitudedifference} />
          </div>
        </div>
      </div>


      <div class="flex-column" id="gyro-raw">
        <StatusPayload/>
        <Gyro Isidata={GyroData} Updatedata={Updategyro}/>
        <div class="flex-column">
          <div class="flex-row">
            <CardKedua Logo={TemperatureLogo} Nama="TEMPERATURE" Isidata={Temperature} Updatedata={Updatetemperature}/>
            <CardKedua Logo={SpiningLogo} Nama="SPIN RATE" Isidata={Spinrate} Updatedata={Updatespinrate}/>
          </div>
          <div class="flex-row">
            <CardKedua Logo={VoltLogo} Nama="VOLTAGE" Isidata={Voltage} Updatedata={Updatevoltage}/>
            <CardKedua Logo={DescentLogo} Nama="DESCENT RATE" Isidata={Descentrate} Updatedata={Updatedescentrate}/>
          </div>
        </div>
        <Raw/>
      </div>
    // </div>
  );
}
// setInterval(function(){
//   console.log(Updatealtitude);
// },1000)
export default App;
