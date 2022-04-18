import React from "react";
import '../Style/status.css'

const Status_payload = () => {
    return(
      <div id="status-payload">
        <div>
          <div class="flex-row">
            <div class="flex-column">
              <div class="ellipse-payload"></div>
            </div>
            <div class="garis-payload"></div>
            <div class="flex-column">
              <div class="ellipse-payload"></div>
              
            </div>
            <div class="garis-payload"></div>
            <div class="flex-column">
              <div class="ellipse-payload"></div>
              
            </div>
            <div class="garis-payload"></div>
            <div class="flex-column">
              <div class="ellipse-payload"></div>
            
            </div>
            <div class="garis-payload"></div>
            <div class="flex-column">
              <div class="ellipse-payload"></div>
              
            </div>

          </div>
          <div class="flex-row" id="tulisan-status">
            <div><p>Stand By</p></div>
            <div><p>Released</p></div>
            <div><p>Hovering</p></div>
            <div><p>Descent</p></div>
            <div><p>Landed</p></div>
          </div>
        </div>
        
      </div>
    )
}
export default Status_payload;