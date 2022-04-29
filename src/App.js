import logo from './logo.svg';
import './App.css';
import Statusbaru from './Component/statusbar'
import Card_pertama from './Component/cardpertama';
import Gps from './Component/gps';
import Status_container from './Component/status_container';
import Status_payload from './Component/status_payload';
import Gyro from './Component/gyro';
import Card_Kedua from './Component/cardkedua';
import Raw from './Component/raw';
// import '../Style/Card.css'
import Grafik from './Component/Data/grafik';
import RawData, { isibagi } from './Component/Data/raw';
import {gyro,pressure,temperature,Voltage,Descentrate,Spinrate,altitudeDifference,altitude} from './Component/Data/datain';
import {updatealtitude,updatealtitudedifference,updatedescentrate,updategyro,updatepressure,updatespinrate,updatetemperature,updatevoltage} from './Component/Data/datain';
// import Haikal from './Component/haikal';
RawData()
function App() {
  return (
    <div class="flex-row">
      <Statusbaru/>
      <div class="flex-column" id="map-video">
        <Status_container/>
        <Gps/>
        <div class="flex-column">
          <div class="flex-row">
            <Card_pertama/>
            <div class="card-pertama"><Grafik Isidata={pressure} Updatedata={updatepressure} /></div>
            
          </div>
          <div class="flex-row">
            <div class="card-pertama"><Grafik Isidata={altitude} Updatedata={updatealtitude} /></div>
            <div class="card-pertama"><Grafik Isidata={altitudeDifference} Updatedata={updatealtitudedifference} /></div> 
          </div>
        </div>
      </div>


      <div class="flex-column" id="gyro-raw">
      <Status_payload/>
      <Gyro/>
      <div class="flex-column">
          <div class="flex-row">
            <Card_Kedua Isidata={temperature} Updatedata={updatetemperature}/>
            <Card_Kedua Isidata={Spinrate} Updatedata={updatespinrate}/>
          </div>
          <div class="flex-row">
            <Card_Kedua Isidata={Voltage} Updatedata={updatevoltage}/>
            <Card_Kedua Isidata={Descentrate} Updatedata={updatedescentrate}/>
          </div>
        </div>
        <Raw/>
      </div>
    </div>
  );
}
setInterval(function(){
  console.log(updatealtitude);
},1000)
export default App;
