import { Stack } from "@mui/material";
import { Line } from "react-chartjs-2";

export const BalanceHistory = () => {
    const data = {
      labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      datasets: [
        {
          label: "Balance",
          data: [200, 400, 800, 600, 700, 300, 600],
          fill: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          backgroundColor: (ctx: any) => {
            const chart = ctx.chart;
            const { ctx: canvasCtx, chartArea } = chart;
  
            if (!chartArea) {
              return null; 
            }
  
            const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, "rgba(79, 70, 229, 0.3)"); 
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); 
            return gradient;
          },
          borderColor: "#4f46e5", 
          borderWidth: 2,
          tension: 0.4, 
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, 
        },
      },
      scales: {
        x: {
          grid: {
            display: false, 
          },
        },
        y: {
          grid: {
            color: "#e5e7eb", 
          },
          beginAtZero: true,
          ticks: {
            stepSize: 200, 
          },
        },
      },
    };
  
    return (
      <Stack
        borderRadius="25px"
        bgcolor="common.white"
        p={2}
        sx={{ height: "300px" }}
      >
        <Line data={data} options={options} />
      </Stack>
    );
  };