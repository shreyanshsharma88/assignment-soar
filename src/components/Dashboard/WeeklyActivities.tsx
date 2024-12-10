import { Stack } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { useDashboard } from "../../providers";

export const WeeklyActivities = () => {
  const { weeklyActivity } = useDashboard();
  return (
    
      <Stack borderRadius="25px" p={2} bgcolor="common.white">
        <Bar
          data={{
            ...weeklyActivity,
            xLabels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            yLabels: ["0", "100", "200", "300", "400", "500"],
          }}
          options={{
            plugins: {
              legend: {
                position: "top",
                labels: {
                  boxHeight: 20,
                  boxWidth: 20,
                  borderRadius: 100,
                },
              },
            },
          }}
        />
      </Stack>
  );
};
