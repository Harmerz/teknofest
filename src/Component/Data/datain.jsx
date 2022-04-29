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

export const gyro = [
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

export const pressure = [
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

export const altitude = [
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
export const altitudeDifference = [
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
export const temperature = [
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





export const updatepressure = [];
export const updategyro = [];
export const updatealtitude = [];
export const updatealtitudedifference = [];
export const updatetemperature = [];
export const updatespinrate = [];
export const updatevoltage = [];
export const updatedescentrate = [];
setInterval(function(){
    updategyro[0] = isibagi.yaw;
    updategyro[1] = isibagi.pitch;
    updategyro[2] = isibagi.roll;
    updatepressure[0] = isibagi.pressure1;
    updatepressure[1] = isibagi.pressure2;
    updatealtitude[0] = isibagi.altitude1;
    updatealtitude[1] = isibagi.altitude2;
    updatealtitudedifference[0] = isibagi.altitudediff;
    updatetemperature[0] = isibagi.temp;
    updatespinrate[0] = isibagi.spinrate;
    updatevoltage[0] = isibagi.voltage;
    updatedescentrate[0] = isibagi.descent;
},1000)



