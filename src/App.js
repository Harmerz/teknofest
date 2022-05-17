// import logo from './logo.svg';
import './App.css';
import Statusbaru from './Component/statusbar'
import CardPertama from './Component/cardpertama';
import GPS from './Component/gps';
import StatusContainer from './Component/status_container';
import StatusPayload from './Component/status_payload';
import Gyro from './Component/gyro';
import CardKedua from './Component/cardkedua';
import Raw from './Component/raw';
// import '../Style/Card.css'
import Grafik from './Component/Data/grafik';
import RawData, { isibagi } from './Component/Data/raw';
import {GyroData,Pressure,Temperature,Voltage,Descentrate,Spinrate,AltitudeDifference,Altitude} from './Component/Data/datain';
import {Updatealtitude,Updatealtitudedifference,Updatedescentrate,Updategyro,Updatepressure,Updatespinrate,Updatetemperature,Updatevoltage} from './Component/Data/datain';
// import Haikal from './Component/haikal';
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
            <CardPertama/>
            <div class="card-pertama"><Grafik Isidata={Pressure} Updatedata={Updatepressure} /></div>
            
          </div>
          <div class="flex-row">
            <div class="card-pertama"><Grafik Isidata={Altitude} Updatedata={Updatealtitude} /></div>
            <div class="card-pertama"><Grafik Isidata={AltitudeDifference} Updatedata={Updatealtitudedifference} /></div> 
          </div>
        </div>
      </div>


      <div class="flex-column" id="gyro-raw">
      <StatusPayload/>
      <Gyro/>
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
setInterval(function(){
  console.log(Updatealtitude);
},1000)
export default App;
