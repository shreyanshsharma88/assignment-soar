import { Stack, useTheme } from "@mui/material";
import { Pie } from "react-chartjs-2";

export const ExpenseStats = () => {
    const theme = useTheme();
  return (
    <Stack bgcolor="common.white" borderRadius="25px" p={2}>
      <Pie
        data={{
          datasets: [
            {
              data: [30, 15, 35, 20],
              backgroundColor: [
                theme.palette.error.contrastText,
                theme.palette.info.dark,
                theme.palette.info.main,
                theme.palette.common.black,
              ],
              type: 'pie',
            },

          ],
          labels: ["Entertainment", "Bills", "Investments", "Others"],
        }}
        
        options={{
          plugins: {
            legend: {
              position: "right",
              labels: {
                boxHeight: 20,
                boxWidth: 20,
                borderRadius: 100,
              },
            },
          },
          cutout: '10%',
        }}
        height={200}

      />
    </Stack>
  );
};
