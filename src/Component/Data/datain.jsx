// import React from "react"
import {isibagi} from "./raw"
function dataawal(){
    let res = [];
    let len = 20;
    while (len--) {
        res.push(0);
    }
    return res;
    }

export const GyroData = [
    {
        name:"Yaw",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    {
        name:"Pitch",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    {
        name:"Roll",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
]

export const Pressure = [
    {
        name:"SP",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    {
        name:"T",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    
]

export const Altitude = [
    {
        name:"SP",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    {
        name:"T",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    
]
export const AltitudeDifference = [
    {
        name:"SP",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    
]
export const Temperature = [
    {
        name:"SP",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    
]
export const Voltage = [
    {
        name:"SP",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    
]
export const Spinrate = [
    {
        name:"SP",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    
]
export const Descentrate = [
    {
        name:"SP",
        type:'line',
        itemStyle: {
            opacity: 0
        },
        smooth: true,
        data: dataawal(),
    },
    
]





export const Updatepressure = [];
export const Updategyro = [];
export const Updatealtitude = [];
export const Updatealtitudedifference = [];
export const Updatetemperature = [];
export const Updatespinrate = [];
export const Updatevoltage = [];
export const Updatedescentrate = [];
setInterval(function(){
    Updategyro[0] = isibagi.yaw;
    Updategyro[1] = isibagi.pitch;
    Updategyro[2] = isibagi.roll;
    Updatepressure[0] = isibagi.pressure1;
    Updatepressure[1] = isibagi.pressure2;
    Updatealtitude[0] = isibagi.altitude1;
    Updatealtitude[1] = isibagi.altitude2;
    Updatealtitudedifference[0] = isibagi.altitudediff;
    Updatetemperature[0] = isibagi.temp;
    Updatespinrate[0] = isibagi.spinrate;
    Updatevoltage[0] = isibagi.voltage;
    Updatedescentrate[0] = isibagi.descent;
},1000)



