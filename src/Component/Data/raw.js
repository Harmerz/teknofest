// import React from "react";
// 376737,52,03/19/2022,09/22/59,100577.30,100565.08,0.32,1.33,1.01,4.93,28.59,7.01,-7.854390,110.338107,68.32,-7.773757,110.376417,159.40,1,-15.78,189.54,530.52,1,Yes
export var isibagi;
export var raw_data = [];
let RawData = ()=>{

function rand(){
    return((Math.random()*10 + 5).toFixed(1) - 0);
}

let gps1_latitude = -7.759029;
let gps1_longitude = 110.373108;
// let gps1_altitude = rand();
let gps2_latitude = -7.759029;
let gps2_longitude = 110.373108;
// let gps2_altitude = rand();



let packet = 0;
let team_id = 376737;
    setInterval(function(){ 
        var today = new Date();
        var date = String(today.getMonth() + 1).padStart(2, '0')+'/'+String(today.getDate()).padStart(2, '0')+'/'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+';'+time;
        let pressure1 = rand();
        let pressure2 = rand();
        let altitude1 = rand();
        let altitude2 = rand();
        let altitudediff = altitude1 - altitude2;
        let descent = rand();
        let temp = rand();
        let voltage = rand();
        gps1_latitude -=0.0001;
        gps1_longitude -= 0.0001;
        let gps1_altitude = rand();
        gps2_latitude += 0.0001;
        gps2_longitude += 0.0001;
        let gps2_altitude = rand();
        let status = rand();
        let pitch = rand();
        let roll = rand();
        let yaw = rand();
        let spinrate = rand();
        let video_transfer="Yes";
        let contoh = team_id+","+packet+','+dateTime+','+pressure1+","+pressure2+","+altitude1+","+altitude2+","+altitudediff+","+descent+","+temp+","+voltage+","+gps1_latitude+","+gps1_longitude+","+gps1_altitude+","+gps2_latitude+","+gps2_longitude+","+gps2_altitude+","+status+","+pitch+","+roll+","+yaw+","+spinrate+","+video_transfer;
        packet++;
        
        const bagi = contoh.split(",");
         isibagi = {
            // dateTime = date+','+time;
            pressure1 : Number(bagi[3]),
            pressure2 : Number(bagi[4]),
            altitude1 : Number(bagi[5]),
            altitude2 : Number(bagi[6]),
            altitudediff : Number(bagi[7]),
            descent : Number(bagi[8]),
            temp : Number(bagi[9]),
            voltage : Number(bagi[10]),
            gps1_latitude : Number(bagi[11]),
            gps1_longitude : Number(bagi[12]),
            gps1_altitude : Number(bagi[13]),
            gps2_latitude : Number(bagi[14]),
            gps2_longitude : Number(bagi[15]),
            gps2_altitude : Number(bagi[16]),
            statusnow : Number(bagi[17]),
            pitch : Number(bagi[18]),
            roll : Number(bagi[19]),
            yaw : Number(bagi[20]),
            spinrate : Number(bagi[21]),
            video_transfer: bagi[22],
        };
        contoh.toString();
        raw_data.push(contoh+" ");
        
    }, 1000);
   
    return(isibagi);
}

// setInterval(function(){console.log(isibagi);},1000);

export default RawData;
