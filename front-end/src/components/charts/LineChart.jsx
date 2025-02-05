// ChartComponent.jsx

import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement,} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: true,
            },
            ticks: {
                display: false,
            }
        }

    },
    elements: {
        line: {
            tension: 0,
        },
    }

};

const labels = ["5월", "6월", "7월", "8월", "9월", "10월"];

export const data = {
    labels,
    datasets: [
        {
            data: [34, 30, 10, 20, 68, 100],
            borderColor: "darkgray",
            borderWidth: 0.6
        },
    ],
};

export function LineChart() {
    return <Line options={options} data={data}/>;
}