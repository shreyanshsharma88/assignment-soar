import { Box, Typography } from "@mui/material";
import { useViewPort } from "../../hooks";
import { MyCards } from "./MyCards";
import { Transactions } from "./Transactions";

export const Dashboard = () => {
  const { isMobile } = useViewPort();
  return (
    <Box
      sx={{
        display: isMobile ? "column" : "grid",
        gridTemplateColumns: "0.90fr 1fr 1fr",
        gridTemplateRows: "auto auto auto",
        gap: isMobile ? "1rem" : "2rem",
        gridTemplateAreas: `
          "my-cards my-cards recent-transactions"
          "weekly-activity weekly-activity expense-stats"
          "quick-transfer balance-history balance-history"
        `,
        padding: isMobile ? "0.5rem" : "1rem 2rem",
      }}
      bgcolor={isMobile ? "common.white" : "background.default"}
    >
      {gridComponents.map((component) => (
        <Box
          key={component.name}
          sx={{
            gridArea: component.name,
            p: 2,
          }}
        >
          {component.component}
        </Box>
      ))}
    </Box>
  );
};

const gridComponents = [
  {
    name: "my-cards",
    component: <MyCards />,
  },
  {
    name: "recent-transactions",
    component: <Transactions/>,
  },
  {
    name: "weekly-activity",
    component: (
      <Typography variant="h3" fontWeight={600} color="info.dark">
        Weekly Activity
      </Typography>
    ),
  },
  {
    name: "expense-stats",
    component: (
      <Typography variant="h3" fontWeight={600} color="info.dark">
        Expense Statistics
      </Typography>
    ),
  },
  {
    name: "quick-transfer",
    component: (
      <Typography variant="h3" fontWeight={600} color="info.dark">
        Quick Transfer
      </Typography>
    ),
  },
  {
    name: "balance-history",
    component: (
      <Typography variant="h3" fontWeight={600} color="info.dark">
        Balance History
      </Typography>
    ),
  },
];
