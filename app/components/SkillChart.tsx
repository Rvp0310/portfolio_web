import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

interface SkillChartProps {
  skills: { name: string; level: number }[]; // level: 0-100
}

const SkillChart: React.FC<SkillChartProps> = ({ skills }) => {
  const data = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        label: "Use %",
        data: skills.map((s) => s.level),
        backgroundColor: "rgba(255, 254, 204, 0.75)", // turquoise semi-transparent
        borderColor: "#fffffa",
        borderWidth: 0.5,
        pointBackgroundColor: "#fffffa",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        angleLines: { color: "#FFFFFA" }, // deep-navy lines
        grid: { color: "#FFFFFA" },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false
        },
        pointLabels: {
          color: "#FFFFFA",
          font: { size: 14 },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return <Radar data={data} options={options} />;
};

export default SkillChart;
