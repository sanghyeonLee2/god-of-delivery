import {BarElement, CategoryScale, Chart as ChartJS, LinearScale} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {Bar} from "react-chartjs-2";

// 플러그인 등록!
ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels);

// ✅ options를 함수로 만들어 reviewStat을 전달받을 수 있도록 수정
const getOptions = (reviewStat) => ({
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
            suggestedMax: Math.max(...reviewStat) * 1.4, // 최대값을 20% 증가시켜 숫자가 안 짤리도록 설정
        },
    },
    plugins: {
        datalabels: {
            anchor: "end",
            align: "top",
            color: "black",
            font: {
                weight: "bold",
            },
            formatter: (value) => value,
            clip: false,
        },
    },
});

const labels = ["1점", "2점", "3점", "4점", "5점"];

const dataSetting = (reviewStat) => ({
    labels,
    datasets: [
        {
            data: reviewStat,
            backgroundColor: "gold",
            borderWidth: 0,
            barPercentage: 0.3,
        },
    ],
});

export function BarChart({reviewStat}) {
    return <Bar options={getOptions(reviewStat)} data={dataSetting(reviewStat)}/>;
}
