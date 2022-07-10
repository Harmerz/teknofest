import React from "react";
import '../Style/status.css'

const StatusPayload = () => {
    return(
      <div class="flex-column" id="status-payload">
          <div>
          <div class="flex-row">
            <div class="flex-column">
              <div class="ellipse-payload" id="standby-p"></div>
            </div>
            <div class="garis-payload" id="released-p-garis"></div>
            <div class="flex-column">
              <div class="ellipse-payload" id="released-p-dot"></div>
              
            </div>
            <div class="garis-payload" id="hovering-p-garis"></div>
            <div class="flex-column">
              <div class="ellipse-payload" id="hovering-p-dot"></div>
              
            </div>
            <div class="garis-payload" id="descent-p-garis"></div>
            <div class="flex-column">
              <div class="ellipse-payload" id="descent-p-dot"></div>
            
            </div>
            <div class="garis-payload" id="landed-p-garis"></div>
            <div class="flex-column">
              <div class="ellipse-payload" id="landed-p-dot"></div>
              
            </div>

          </div>
        </div>
        
          <div class="flex-row" id="tulisan-status-payload">
            <div><p id="Standby-Payload">Stand By</p></div>
            <div><p id="Released-Payload">Released</p></div>
            <div><p id="Hovering-Payload">Hovering</p></div>
            <div><p id="Descent-Payload">Descent</p></div> 
            <div><p id="Landed-Payload">Landed</p></div>
          </div>
      </div>
        
    )
}
export default StatusPayload;