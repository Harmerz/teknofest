import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import cloneDeep from 'lodash.clonedeep';
// import {isibagi} from './raw';

const Grafik= (props) => {

  const DEFAULT_OPTION = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [
      {
        //Waktu terkini dari grafik yang dimaksud
        type: 'category',
        data: (function (){
          let now = new Date();
          let res = [];
          let len = 20;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
            now = new Date(now - 2000);
          }
          return res;
        })()
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        max: 20,
        min: 0,
        boundaryGap: [0.5, 0.5]
      },
    ],
    series: props.Isidata,
  };


  const [option, setOption] = useState(DEFAULT_OPTION);
  
  function fetchNewData() {
    
    const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    const newOption = cloneDeep(option); // immutable
    
    //delete waktu lama dan input waktu terbaru
    newOption.xAxis[0].data.shift();
    newOption.xAxis[0].data.push(axisData);
    console.log(props.Updatedata);
    if(props.Updatedata.length>0){
    const data0 = newOption.series[0].data;
        data0.shift();
        data0.push(props.Updatedata[0]);
    }

    //Jika grafik terdapat lebih dari satu fungsi
    
    if(props.Updatedata.length>1){
      const data1 = newOption.series[1].data;
      data1.shift();
      data1.push(props.Updatedata[1]);
      
    };
    if(props.Updatedata.length>2){
      const data2 = newOption.series[2].data;
      data2.shift();
      data2.push(props.Updatedata[2]);
    };
    setOption(newOption);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchNewData();
    }, 500);

    return () => clearInterval(timer);
  });

  return <ReactECharts
    option={option}
    style={{ height : '100%' }}
  />;
};

export default Grafik;