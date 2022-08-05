import './App.css';
import Statusbar, {Tool, Upload} from './Component/statusbar'
import CardPertama from './Component/cardpertama';
import GPS from './Component/gps';
import StatusContainer from './Component/status_container';
import StatusPayload from './Component/status_payload';
import Gyro, {TigaDimensi} from './Component/gyro';
import CardKedua from './Component/cardkedua';
import Raw from './Component/raw';
import {GyroData,Pressure,Temperature,Voltage,Descentrate,Spinrate,AltitudeDifference,Altitude} from './Component/Data/datain';
import {Updatealtitude,Updatealtitudedifference,Updatedescentrate,Updategyro,Updatepressure,Updatespinrate,Updatetemperature,Updatevoltage} from './Component/Data/datain';
import Video from './Component/video';
import AltitudeLogo from './SVG/Altitude.svg';
import DescentLogo from './SVG/Descent.svg';
import PressureLogo from './SVG/Pressure.svg';
import SpiningLogo from './SVG/Spining.svg';
import TemperatureLogo from './SVG/Temperature.svg';
import VoltLogo from './SVG/Volt.svg';


function App() {
  return (
    <div class="flex-row">
      <div className='flex-column'>
        <Statusbar />
        <Tool />
        <Upload />
      </div>
      <div class="flex-column" id="map-video">
        <StatusContainer/>
        <GPS/>
        <div class="flex-column">
          <div class="flex-row">
            <Video />
            <CardPertama Logo={PressureLogo} Nama="PRESSURE" Isidata={Pressure} Updatedata={Updatepressure} satuan=" Pa"/>
            
          </div>
          <div class="flex-row">
            <CardPertama Logo={AltitudeLogo} Nama="ALTITUDE" Isidata={Altitude} Updatedata={Updatealtitude} satuan=" m" />
            <CardPertama Logo={AltitudeLogo} Nama="ALTITUDE DIFFERENCE" Isidata={AltitudeDifference} Updatedata={Updatealtitudedifference} satuan=" m" />
          </div>
        </div>
      </div>


      <div class="flex-column" id="gyro-raw">
        <StatusPayload/>
        <div id='gyro' className='flex-row'>
          <Gyro Isidata={GyroData} Updatedata={Updategyro}/>
          <TigaDimensi Updatedata={Updategyro}/>
        </div>
        <div class="flex-column" id="card-kanan">
          <div class="flex-row">
            <CardKedua Logo={TemperatureLogo} Nama="TEMPERATURE" Isidata={Temperature} Updatedata={Updatetemperature} satuan=" °C"/>
            <CardKedua Logo={SpiningLogo} Nama="SPIN RATE" Isidata={Spinrate} Updatedata={Updatespinrate}/>
          </div>
          <div class="flex-row">
            <CardKedua Logo={VoltLogo} Nama="VOLTAGE" Isidata={Voltage} Updatedata={Updatevoltage} satuan=" V"/>
            <CardKedua Logo={DescentLogo} Nama="DESCENT RATE" Isidata={Descentrate} Updatedata={Updatedescentrate} satuan=" m/s"/>
          </div>
        </div>
        <Raw/>
      </div>
    </div>
  );
}
// setInterval(function(){
//   console.log(Updatealtitude);
// },1000)
export default App;
