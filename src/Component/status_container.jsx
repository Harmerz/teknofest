import React from "react";
import '../Style/status.css'

const Status_container = () =>{
    return(
    <div class="flex-column" id="status-container">
      <div id="dalam-container">
        <div class="flex-row">
          <div class="flex-column">
            <div class="ellipse-container"></div>
          </div>
          <div class="garis-container"></div>
          <div class="flex-column">
            <div class="ellipse-container"></div>
            
          </div>
          <div class="garis-container"></div>
          <div class="flex-column">
            <div class="ellipse-container"></div>
            
          </div>
          <div class="garis-container"></div>
          <div class="flex-column">
            <div class="ellipse-container"></div>
          
          </div>
          <div class="garis-container"></div>
          <div class="flex-column">
            <div class="ellipse-container"></div>
            
          </div>
          <div class="garis-container"></div>
          <div class="flex-column">
            <div class="ellipse-container"></div>
          
          </div>
        </div>
        
      </div>
      <div class="flex-row" id="tulisan-status">
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

export default Status_container;