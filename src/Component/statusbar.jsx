import React, {Component} from 'react';
import '../Style/statusbar.css';
import LogoUGM from '../SVG/LogoUGM.svg';
import UgrasenaLogo from '../SVG/Ugrasena.svg';
import {isibagi} from './Data/raw';
import commandServices from '../utils/services/command';

// eslint-disable-next-line require-jsdoc
export function Tool(){
  return(
    <div id="tools">  
          <div class="flex-column" id="tools-flex">           
            <p>Set UTC Time</p>
            <button type="submit" class="button2" onClick={()=>commandServices.setTime()}>Set</button>
            <p>Manual Release</p>
            <button  type="submit" class="button2" onClick={()=>commandServices.release()}>Release</button>
            <p>Manual Drive</p>
            <button  type="submit" class="button2" onClick={()=>commandServices.reset()}>Drive</button>
            <p>CSV</p>
            <button  type="submit" class="button2" onClick={()=>commandServices.download()}>Download</button>
          </div>
        </div>
  )
}
export function Upload(){
  return(
          <div id="video-transfer">
            <div id="video">
              <iframe src="http://192.168.100.5" id="iframe" title="upload"></iframe>
              {/* <button onclick={window.open("192.16
              .8.0.5")}>UPLOAD</button> */}
      </div>
    </div>
  );
}

class Statusbar extends Component{

  constructor (props) {
    super(props);
    this.state = {
      date : "00:00:00",
      time : "00:00:00",
      Id : "367772",
      packet : 0,
      mission : "00:00:00",
      millisecond : 0,
    };
  }


  componentDidMount() {

    setInterval(
        () => this.tick(),

        1000
    );
  }

  tick() {
    var today = new Date();
    var date = String(today.getMonth() + 1).padStart(2, '0')+'/'+String(today.getDate()).padStart(2, '0')+'/'+today.getFullYear();
    var time = String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');
    var d = isibagi.packet;
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    this.setState({
      date : date,
      time : time,
      Id : isibagi.team_id,
      packet : isibagi.packet,
      mission : String(h).padStart(2, '0')+":"+String(m).padStart(2, '0')+":"+String(s).padStart(2, '0'),
    });
  }



  render(){
    return (
      <div className="flex-column" id="dashboard">
        <div id="team-id">
          <div className="flex-column">
            <p id="tulisan">UGRASENA</p>
            <div className="flex-row" id="foto">
              <img src={UgrasenaLogo} alt="logo ugm" height="35px"/>
              <img src={LogoUGM} alt="logo ugm" height="35px"/>
            </div>
          </div>

        </div>
        <div className="utama">
          <div id="port">
            <div>
              <p className="port-text">Port : </p>
              {isibagi.portStatus?<p className="port-text" id="connected">Connected </p>
              :<p className="port-text" id="disconnected">Diconnected </p>}
            </div>
          </div>
        </div>
        <div id="status">
          <div>
            <p className="pengertian">TEAM ID</p>
            <p className="penjelasan">{this.state.Id}</p>
            <p className="pengertian">Date Misions</p>
            <p className="penjelasan">{this.state.date}</p>
            <p className="pengertian">Clock</p>
            <p className="penjelasan">{this.state.time}</p>
            <p className="pengertian">Packet Count</p>
            <p className="penjelasan">{this.state.packet}</p>
            <p className="pengertian">Mission Time</p>
            <p className="penjelasan">{`${this.state.mission}`}</p>

          </div>
        </div>


      </div>
    );
  }
}
// const Statusbar = () =>{
//   var today = new Date();
//   var date = String(today.getMonth() + 1).padStart(2, '0')+'/'+String(today.getDate()).padStart(2, '0')+'/'+today.getFullYear();
//   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     return(

//     )
// }
export default Statusbar;