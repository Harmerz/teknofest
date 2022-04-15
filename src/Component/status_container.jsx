import React from "react";
import '../Style/status_container.css'

const Status_container = () =>{
    return(<div id="status-container">
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
    <div class="flex-row" id="tulisan-status">
      <div><p>Stand By</p></div>
      <div><p>Ascent</p></div>
      <div><p>Released</p></div>
      <div><p>Separated</p></div>
      <div><p>Descent</p></div>
      <div><p>Landed</p></div>
    </div>
  </div>)
}

export default Status_container;