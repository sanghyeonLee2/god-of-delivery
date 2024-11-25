// ChartComponent.jsx

import {BarElement, CategoryScale, Chart as ChartJS, LinearScale,} from "chart.js";
import {Bar} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                display: true,
            },

        },
        y: {
            display: false,
        },
    },

};

const labels = ["1점", "2점", "3점", "4점", "5점"];

export const data = {
    labels,
    datasets: [
        {
            data: [34, 0, 0, 0, 1],
            backgroundColor: "gold",
            borderWidth: 0,
            barPercentage: 0.2,
        },
    ],
};

export function BarChart() {
    return <Bar options={options} data={data}/>;
}