import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ userData }) => {
  return (
    <div>
      <Bar data={userData} />
    </div>
  );
};

export default LineChart;
