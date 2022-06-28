import React from "react";
import '../Style/Card.css';
import Webcam from "react-webcam";

const Video = () =>{
    return(
        <div class="card-pertama">
            <Webcam height={260} width={420}/>
        </div>
    )
}

export default Video;