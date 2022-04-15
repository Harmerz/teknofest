import logo from './logo.svg';
import './App.css';
import Statusbaru from './Component/statusbar'
import Card_pertama from './Component/cardpertama';
import Gps from './Component/gps';
import Status_container from './Component/status_container';
// import Haikal from './Component/haikal';
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
            <Card_pertama/>
          </div>
          <div class="flex-row">
            <Card_pertama/>
            <Card_pertama/>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
