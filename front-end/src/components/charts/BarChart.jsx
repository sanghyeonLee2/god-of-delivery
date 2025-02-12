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

const dataSetting = (reviewStat) => {
    return {
        labels,
        datasets: [
            {
                data: reviewStat,
                backgroundColor: "gold",
                borderWidth: 0,
                barPercentage: 0.2,
            },
        ],
    };
}

export function BarChart({reviewStat}) {
    return <Bar options={options} data={dataSetting(reviewStat)}/>;
}