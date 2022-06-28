import React from "react";
import '../Style/statusbar.css'
import LoginLogo from '../SVG/Login.svg';
import LogoUGM from '../SVG/LogoUGM.svg';
import UgrasenaLogo from '../SVG/Ugrasena.svg';

const Statusbaru = () =>{
    return(
    <div class="flex-column" id="dashboard">
      <div id="team-id">
        <div class="flex-column">
          <p id="tulisan">UGRASENA</p>
          <div class="flex-row" id="foto">
            <img src={UgrasenaLogo} alt="logo ugm" height="35px"/>
            <img src={LogoUGM} alt="logo ugm" height="35px"/>
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
         
          <p>Set UTC Time</p>
          <div class="button2">Set</div>
          <p>Manual Release</p>
          <div class="button2">Release</div>
          <p>Reset Memory</p>
          <div class="button2">Reset</div>
          <p>CSV</p>
          <div class="button2">Download</div>
          
          
        </div>
      </div>
      <div id="video-transfer">
        <div className="flex-column" id="video">
          <div className="foto-satelit">
            <img src={LoginLogo} alt="Login" height="80px" />
          </div>
          <div className="penjelasan-connect">
            DISCONNECTED
          </div>
          <form className="password">
              <input type="text" id="password" name="password" />
          </form>
          <div class="button2">Login</div>
        </div>
            
      </div>
    </div>
    )
}
export default Statusbaru;