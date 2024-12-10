import { Typography } from "@mui/material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PieController,
  Title,
  Tooltip,
  ArcElement
} from "chart.js";
import { Route, Routes } from "react-router-dom";
import { BaseLayout, Dashboard, sidebarOptions } from "./components";
import { AppThemeProvider, DashboardProvider } from "./providers";

function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PieController,
    ArcElement
  );
  return (
    <AppThemeProvider>
      <DashboardProvider>
        {/* <Layout> */}
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" />
            {sidebarOptions.map((opt) => {
              if (opt.label === "Dashboard") return;
              return (
                <Route
                  key={opt.label}
                  path={opt.label.toLowerCase().split(" ").join("-")}
                  element={<Typography>404 Not Found</Typography>}
                />
              );
            })}
          </Route>
        </Routes>
        {/* </Layout> */}
      </DashboardProvider>
    </AppThemeProvider>
  );
}

export default App;
