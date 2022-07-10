import React from "react";
import '../Style/status.css'

const StatusContainer = () =>{
    return(
    <div className="flex-column" id="status-container">
      <div id="dalam-container">
        <div className="flex-row">
          <div className="flex-column">
            <div className="ellipse-container" id="standby-c"></div>
          </div>
          <div className="garis-container" id="ascent-c-garis"></div>
          <div className="flex-column">
            <div className="ellipse-container" id="ascent-c-dot"></div>
          </div>
          <div className="garis-container" id="released-c-garis"></div>
          <div className="flex-column">
            <div className="ellipse-container" id="released-c-dot"></div>
          </div>
          <div className="garis-container" id="separated-c-garis"></div>
          <div className="flex-column">
            <div className="ellipse-container" id="separated-c-dot"></div>
          </div>
          <div className="garis-container" id="descent-c-garis"></div>
          <div className="flex-column">
            <div className="ellipse-container" id="descent-c-dot"></div>
          </div> 
          <div className="garis-container" id="landed-c-garis"></div>
          <div className="flex-column">
            <div className="ellipse-container" id="landed-c-dot"></div>
          
          </div>
        </div>
        
      </div>
      <div className="flex-row" id="tulisan-status">
          <div><p id="Standby-Container">Stand By</p></div>
          <div><p id="Ascent-Container">Ascent</p></div>
          <div><p id="Released-Container">Released</p></div>
          <div><p id="Separated-Container">Separated</p></div>
          <div><p id="Descent-Container">Descent</p></div>
          <div><p id="Landed-Container">Landed</p></div>
        </div>
    </div>
  )
}

export default StatusContainer;