// import React from "react";
// 376737,52,03/19/2022,09/22/59,100577.30,100565.08,0.32,1.33,1.01,4.93,28.59,7.01,-7.854390,110.338107,68.32,-7.773757,110.376417,159.40,1,-15.78,189.54,530.52,1,Yes
import { io } from "socket.io-client";
import {teknofest} from "./teknofest";
const socket = io("ws://localhost:4000");

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });


export var isibagi;
export var raw_data = [];
export let rolling;
export var port;
export var broken;

// receive a message from the server
// socket.on('PACKET', (args) => {
//     var iniportStatus = "Disconnected";
//     // console.log(args);
//     if(args.system.portStatus === true){
//         iniportStatus = "Connected";
//     }else{
//         iniportStatus = "Disconnected";
//     }
//    port = {
//     portStatus : iniportStatus,
//    }
// //    console.log(args.broken.msg);
//     if(args.payload == null){
//         broken = "BROKEN";
//     }else{
//         broken = "GET-DATA";
//     }
//     isibagi = {
//         // dateTime = date+','+time;
//             team_id : args.payload.teamId,
//             packet : args.payload.packetNumber,
//             pressure1 : args.payload.pressure1,
//             pressure2 : args.payload.pressure2,
//             altitude1 : args.payload.altitude1,
//             altitude2 : args.payload.altitude2,
//             altitudediff : args.payload.altitudeDifference,
//             descent : args.payload.descentRate,
//             temp : args.payload.temp,
//             voltage : args.payload.voltageLevel,
//             gps1_latitude : args.payload.gps1Latitude,
//             gps1_longitude : args.payload.gps1Longtitude,
//             gps1_altitude : args.payload.gps1Altitude,
//             gps2_latitude : args.payload.gps2Latitude,
//             gps2_longitude : args.payload.gps2Longtitude,
//             gps2_altitude : args.payload.gps2Altitude,
//             statusnow : args.payload.satStatus,
//             pitch : args.payload.pitch,
//             roll : args.payload.roll,
//             yaw : args.payload.yaw,
//             spinrate : args.payload.spinRate,
//         };
//   console.log(isibagi);
    
//     raw_data.push(args.payload.rawData, " ")
// });


let RawData = ()=>{
    var i=0;
    var packetcheck = 0;
    setInterval(function(){ 
        port = {
                portStatus : "Connected",
               }
        packetcheck++;
        // console.log(teknofest[i]);
        const bagi = teknofest[i];
        bagi[2] = "0/0/2000";
        bagi[3] = "3/0/0";
        // console.log(bagi);
        if(packetcheck !== bagi[1]){
            broken = "BROKEN";
        }else{
            isibagi = {
                // dateTime = date+','+time;
                team_id : bagi[0],
                packet : Number(bagi[1]),
                pressure1 : Number(bagi[4]),
                pressure2 : Number(bagi[5]),
                altitude1 : Number(bagi[6]),
                altitude2 : Number(bagi[7]),
                altitudediff : Number(bagi[8]),
                descent : Number(bagi[9]),
                temp : Number(bagi[10]),
                voltage : Number(bagi[11]),
                gps1_latitude : Number(bagi[12]),
                gps1_longitude : Number(bagi[13]),
                gps1_altitude : Number(bagi[14]),
                gps2_latitude : Number(bagi[15]),
                gps2_longitude : Number(bagi[16]),
                gps2_altitude : Number(bagi[17]),
                statusnow : Number(bagi[18]),
                pitch : Number(bagi[19]),
                roll : Number(bagi[20]),
                yaw : Number(bagi[21]),
                spinrate : Number(bagi[22]),
            };
            broken = "GET-DATA";
            i++;
            raw_data.push(teknofest[i], " ");
        }
         
        console.log(isibagi);
    }, 1000);
   
    return(isibagi);
}
// setInterval(() => {
//     testing++;
// },5000)

setInterval(function(){
    
    // console.log(isibagi);
    // isibagi.voltage = 1;
    let satellite = isibagi.statusnow;
    // switch(isibagi.statusnow){
    //     case "BOOT" :
    //         satellite = 1;
    //         break;
    //     case "PENDING" :
    //         satellite = 2;
    //         break;
    //     case "ELEVATION" :
    //         satellite = 3;
    //         break;
    //     case "MODEL_SATELLITE_DESCEND":
    //         satellite = 4;
    //         break;
    //     case "LEAVING":
    //         satellite = 5;
    //         break;
    //     case "SCIENCE_PAYLOAD_DESCEND":
    //         satellite = 6;
    //         break;
    //     case "HOVERING":
    //         satellite = 7;
    //         break;
    //     case "SP_DESCEND_2":
    //         satellite = 8;
    //         break;
    //     case "RESCUE":
    //         satellite = 9;
    //         break;
    //     default:
    //         satellite = 0;
    // }
    if(satellite>0){
        document.getElementById("standby-c").className="ellipse-container-active";
        document.getElementById("standby-p").className="ellipse-payload-active";
    }
    if(satellite>2){
        document.getElementById("ascent-c-garis").className="garis-container-active";
        document.getElementById("ascent-c-dot").className="ellipse-container-active";
    }
    if(satellite>3){
        document.getElementById("released-c-garis").className="garis-container-active";
        document.getElementById("released-c-dot").className="ellipse-container-active";
    }
    if(satellite>4){
        document.getElementById("separated-c-garis").className="garis-container-active";
        document.getElementById("separated-c-dot").className="ellipse-container-active";
    }
    if(satellite>5){
        document.getElementById("descent-c-garis").className="garis-container-active";
        document.getElementById("descent-c-dot").className="ellipse-container-active";
    }
    if(satellite>8){
        document.getElementById("landed-c-garis").className="garis-container-active";
        document.getElementById("landed-c-dot").className="ellipse-container-active";
    }
    //payload
    if(satellite>4){
        document.getElementById("released-p-garis").className="garis-payload-active";
        document.getElementById("released-p-dot").className="ellipse-payload-active";
    }
    if(satellite>6){
        document.getElementById("hovering-p-garis").className="garis-payload-active";
        document.getElementById("hovering-p-dot").className="ellipse-payload-active";
    }
    if(satellite>7){
        document.getElementById("descent-p-garis").className="garis-payload-active";
        document.getElementById("descent-p-dot").className="ellipse-payload-active";
    }
    if(satellite>8){
        document.getElementById("landed-p-garis").className="garis-payload-active";
        document.getElementById("landed-p-dot").className="ellipse-payload-active";
    }
    


},1000);

export default RawData;


