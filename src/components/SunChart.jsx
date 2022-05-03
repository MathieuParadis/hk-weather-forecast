// CONFIG IMPORTS
import React from 'react';

// REACT CHART IMPORTS
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const SunChart = ({sunData}) => {
  const xAxis = [];
  const Yaxis = [];
  
  sunData.map((el) => {
      xAxis.push(el.date);
      Yaxis.push(el.rise)
  })

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Sun rise",
        data: Yaxis,
        fill: false,
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  // const options = {
  //   title: {
  //     display: true,
  //     text: "Line Chart",
  //   },

  // };

  return <Line data={data} />;
};

export default SunChart;