// import React from "react";
// 376737,52,03/19/2022,09/22/59,100577.30,100565.08,0.32,1.33,1.01,4.93,28.59,7.01,-7.854390,110.338107,68.32,-7.773757,110.376417,159.40,1,-15.78,189.54,530.52,1,Yes
import { io } from "socket.io-client";
const socket = io("ws://localhost:4000");

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });


export var isibagi;
export var raw_data = [];
export let rolling;

// receive a message from the server
socket.on('PACKET', (args) => {
    var portStatus;
    console.log(args.broken);
    if(args.system.portStatus){
        portStatus = "Connected";
    }else{
        portStatus = "Disconnected";
    }
  isibagi = {
    // dateTime = date+','+time;
        team_id : args.payload.teamId,
        packet : args.payload.packetNumber,
        pressure1 : args.payload.pressure1,
        pressure2 : args.payload.pressure2,
        altitude1 : args.payload.altitude1,
        altitude2 : args.payload.altitude2,
        altitudediff : args.payload.altitudeDifference,
        descent : args.payload.descentRate,
        temp : args.payload.temp,
        voltage : args.payload.voltageLevel,
        gps1_latitude : args.payload.gps1Latitude,
        gps1_longitude : args.payload.gps1Longtitude,
        gps1_altitude : args.payload.gps1Altitude,
        gps2_latitude : args.payload.gps2Latitude,
        gps2_longitude : args.payload.gps2Longtitude,
        gps2_altitude : args.payload.gps2Altitude,
        statusnow : args.payload.satStatus,
        pitch : args.payload.pitch,
        roll : args.payload.roll,
        yaw : args.payload.yaw,
        spinrate : args.payload.spinRate,
        portStatus : portStatus,
    };
    raw_data.push(args.payload.rawData, " ")
});
let RawData = ()=>{
    return 0;
}



// // let RawData = ()=>{

// //     let i=0,j=0,k=0  ;
// //     let team_id = '367772';
// //     let packet = 0;
// //     catatgyro[0] = 0;
// //     catatgyro[-1] = 0;
// //     setInterval(function(){ 
// //         k++;
// //         i+=10;
// //         var today = new Date();
// //         var date = String(today.getMonth() + 1).padStart(2, '0')+'/'+String(today.getDate()).padStart(2, '0')+'/'+today.getFullYear();
// //         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// //         var dateTime = date+';'+time;
// //         let pressure1 = rand();
// //         let pressure2 = rand();
// //         let altitude1 = rand();
// //         let altitude2 = rand();
// //         let altitudediff = Math.abs(altitude1 - altitude2).toFixed(2);
// //         let descent = rand();
// //         let temp = rand();
// //         let voltage = rand();
// //         gps1_latitude -=0.0001;
// //         gps1_latitude.toFixed(6);
// //         gps1_longitude -= 0.0001;
// //         gps1_longitude.toFixed(6);
// //         let gps1_altitude = rand();
// //         gps2_latitude += 0.0001;
// //         gps2_latitude.toFixed(6);
// //         gps2_longitude += 0.0001;
// //         gps1_longitude.toFixed(6);
// //         let gps2_altitude = rand();
// //         let status = testing;
// //         let pitch = j;
// //         let roll = i;
// //         let yaw = j;
// //         let spinrate = rand();
// //         let video_transfer="Yes";
// //         let contoh = team_id+","+packet+','+dateTime+','+pressure1+","+pressure2+","+altitude1+","+altitude2+","+altitudediff+","+descent+","+temp+","+voltage+","+gps1_latitude.toFixed(6)+","+gps1_longitude.toFixed(6)+","+gps1_altitude.toFixed(6)+","+gps2_latitude.toFixed(6)+","+gps2_longitude.toFixed(6)+","+gps2_altitude.toFixed(6)+","+status+","+pitch+","+roll+","+yaw+","+spinrate+","+video_transfer;
// //         packet++;
// //         const bagi = contoh.split(",");
// //          isibagi = {
// //             // dateTime = date+','+time;
// //             team_id : bagi[0],
// //             packet : Number(bagi[1]),
// //             pressure1 : Number(bagi[3]),
// //             pressure2 : Number(bagi[4]),
// //             altitude1 : Number(bagi[5]),
// //             altitude2 : Number(bagi[6]),
// //             altitudediff : Number(bagi[7]),
// //             descent : Number(bagi[8]),
// //             temp : Number(bagi[9]),
// //             voltage : Number(bagi[10]),
// //             gps1_latitude : Number(bagi[11]),
// //             gps1_longitude : Number(bagi[12]),
// //             gps1_altitude : Number(bagi[13]),
// //             gps2_latitude : Number(bagi[14]),
// //             gps2_longitude : Number(bagi[15]),
// //             gps2_altitude : Number(bagi[16]),
// //             statusnow : Number(bagi[17]),
// //             pitch : Number(bagi[18]),
// //             roll : Number(bagi[19]),
// //             yaw : Number(bagi[20]),
// //             spinrate : Number(bagi[21]),
// //             video_transfer: bagi[22],
// //         };
// //         contoh.toString();
// //         raw_data.push(contoh+" ");  
// //         catatgyro[k] = isibagi.roll;
        
// //         rolling = catatgyro[k-2];
// //     }, 1000);
   
// //     return(isibagi);
// // }
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