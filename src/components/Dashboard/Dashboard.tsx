import { Box, Typography } from "@mui/material";
import { useViewPort } from "../../hooks";
import { MyCards } from "./MyCards";
import { Transactions } from "./Transactions";
import { WeeklyActivities } from "./WeeklyActivities";
import { ExpenseStats } from "./ExpenseStats";
import { QuickTransfer } from "./QuickTransfer";
import { BalanceHistory } from "./BalanceHistory";

export const Dashboard = () => {
  const { isMobile } = useViewPort();
  return (
    <Box
      sx={{
        display: isMobile ? "column" : "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto auto auto",
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
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {!!component.headerComponent && (
            <Typography variant="h3" fontWeight={600} color="info.dark">
              {component.headerComponent}
            </Typography>
          )}
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
    component: <Transactions />,
    headerComponent: "Recent Transactions",
  },
  {
    name: "weekly-activity",
    component: <WeeklyActivities />,
    headerComponent: "Weekly Activities",
  },
  {
    name: "expense-stats",
    component: <ExpenseStats />,
    headerComponent: "Expense Statistics",
  },
  {
    name: "quick-transfer",
    component: <QuickTransfer />,
    headerComponent: "Quick Transfer",
  },
  {
    name: "balance-history",
    component: <BalanceHistory />,
    headerComponent: "Balance History",
  },
];
