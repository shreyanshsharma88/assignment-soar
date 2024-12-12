import { Typography } from "@mui/material";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PieController,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Route, Routes } from "react-router-dom";
import { BaseLayout, Dashboard, Settings, sidebarOptions } from "./components";
import {
  AppThemeProvider,
  DashboardProvider,
  UserDetailsProvider,
} from "./providers";

function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PieController,
    ArcElement,
    LineElement,
    LineController,
    PointElement,
    Filler
  );
  return (
    <AppThemeProvider>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <DashboardProvider>
          <UserDetailsProvider>
            <Routes>
              <Route element={<BaseLayout />}>
                <Route
                  path="/"
                  element={
                    <Typography variant="h1">
                      Please navigate to dashboard/settings
                    </Typography>
                  }
                />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/settings" element={<Settings />} />
                {sidebarOptions.map((opt) => {
                  if (["Dashboard", "Settings"].includes(opt.label)) return;
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
          </UserDetailsProvider>
        </DashboardProvider>
      {/* </LocalizationProvider> */}
    </AppThemeProvider>
  );
}

export default App;
