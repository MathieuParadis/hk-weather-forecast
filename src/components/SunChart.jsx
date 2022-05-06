// CONFIG IMPORTS
import React from 'react';

// REACT CHART IMPORTS
import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const SunChart = ({sunData}) => {
  const xAxis = [];
  const yAxis = [];
  
  sunData.map((el) => {
      // converting string into date
      let arrayDate = (el.date).split(':');
      let newDate = new Date(`${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`);
      xAxis.push(newDate);

      // converting time in number
      if (el.rise) {
        const array = (el.rise).split(':');
        const time = parseInt(array[0]) + parseInt(array[1])/60;
        yAxis.push(time);
      }
  })

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Sun rise",
        data: yAxis,
        fill: false,
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const options = {
    scales: {
      y:
        {
          min: 5.5,
          max: 7.5,
          stepSize: 5,
        },
      x:
        {
        },
    },
  };
  

  return <Line data={data} options={options} />;
};

export default SunChart;