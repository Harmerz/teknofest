import React from "react";
import '../Style/statusbar.css'

const Statusbaru = () =>{
    return(
    <div class="flex-column" id="dashboard">
      <div id="team-id">
        <div class="flex-column">
          <p id="tulisan">UGRASENA</p>
          <div class="flex-row" id="foto">
            {/* <img src="Assets/logo-ugrasena.png" alt="logo ugm"/>
            <img src="Assets/logo-ugm.png" alt="logo ugm"/> */}
          </div>
        </div>
        
      </div>
      <div class="utama">
        <div id="port">
          <div>
            <p class="port-text">Port : </p>
            <p class="port-text" id="connected">Connected </p>
          </div>
        </div>
      </div>
      <div id="status">
        <div>
          <p class="pengertian">Mission Time</p>
          <p class="penjelasan">00:00:00</p>
          <p class="pengertian">Packet Count</p>
          <p class="penjelasan">100</p>
          <p class="pengertian">Mode</p>
          <p class="penjelasan">F</p>
          <p class="pengertian">SP Release</p>
          <p class="penjelasan">Y</p>
          <p class="pengertian">GPS Time</p>
          <p class="penjelasan">00:00:00</p>
          <p class="pengertian">GPS Sats</p>
          <p class="penjelasan">16</p>
          <p class="pengertian">Command Echo</p>
          <p class="penjelasan">CXON</p>
        </div>
      </div>
      <div id="tools">
        <div class="flex-column" id="tools-flex">
          <p>Container Telemetry</p>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
          <p>Simulation Mode</p>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
          <div class="button" id="activate">Activate</div>
          <p>Set UTC Time</p>
          <div class="button2">Set</div>
          <p>Manual Release</p>
          <div class="button2">Release</div>
          <p>Reset Memory</p>
          <div class="button2">Reset</div>
          <p>Download CSV</p>
          <div class="flex-row" id="download-csv">
            <div class="button1" id="download-sp">SP</div>
            <div class="button1" id="download-c">C</div>
          </div>
          
        </div>
      </div>
      <div id="video-transfer">
  
      </div>
    </div>
    )
}
export default Statusbaru;