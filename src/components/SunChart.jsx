// CONFIG IMPORTS
import React from 'react';

// REACT CHART IMPORT
import { Line } from 'react-chartjs-2';

const SunChart = () => {
  const data = {
    // labels: date.slice(0, 10).reverse(),
    datasets: [
      {
        label: "Tailles (en mètres)",
        // data: heights.slice(0, 10).reverse(),
        borderColor: ["rgba(255, 206, 86, 1)"],
        backgroundColor: ["rgba(255, 206, 86, 1)"],
        pointBackgroundColor: "rgba(255, 206, 86, 1)",
        pointBorderColor: "rgba(255, 206, 86, ",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },

  };

  return <Line data={data} options={options} />;
};

export default SunChart;