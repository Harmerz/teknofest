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
import AltitudeLogo from './LOGO SVG/Altitude.svg';
import {GyroData,Pressure,Temperature,Voltage,Descentrate,Spinrate,AltitudeDifference,Altitude} from './Component/Data/datain';
import {Updatealtitude,Updatealtitudedifference,Updatedescentrate,Updategyro,Updatepressure,Updatespinrate,Updatetemperature,Updatevoltage} from './Component/Data/datain';
import Video from './Component/video';
RawData()
function App() {
  return (
    
    <div class="flex-row">
      <Statusbaru/>
      <div class="flex-column" id="map-video">
        <StatusContainer/>
        <GPS/>
        <div class="flex-column">
          <div class="flex-row">
            <Video/>
            <CardPertama Isidata={Pressure} Updatedata={Updatepressure} />
            
          </div>
          <div class="flex-row">
            <CardPertama Isidata={Altitude} Updatedata={Updatealtitude} />
            <CardPertama Isidata={AltitudeDifference} Updatedata={Updatealtitudedifference} />
          </div>
        </div>
      </div>


      <div class="flex-column" id="gyro-raw">
        <StatusPayload/>
        <Gyro Isidata={GyroData} Updatedata={Updategyro}/>
        <div class="flex-column">
          <div class="flex-row">
            <CardKedua Isidata={Temperature} Updatedata={Updatetemperature}/>
            <CardKedua Isidata={Spinrate} Updatedata={Updatespinrate}/>
          </div>
          <div class="flex-row">
            <CardKedua Isidata={Voltage} Updatedata={Updatevoltage}/>
            <CardKedua Isidata={Descentrate} Updatedata={Updatedescentrate}/>
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
