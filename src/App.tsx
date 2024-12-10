import { Route, Routes } from "react-router-dom";
import { AppThemeProvider, DashboardProvider } from "./providers";
import { BaseLayout, Dashboard, sidebarOptions } from "./components";
import { Typography } from "@mui/material";
function App() {
  return (
    <AppThemeProvider>
      <DashboardProvider>
        {/* <Layout> */}
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" />
            {sidebarOptions.map((opt) => {
              if(opt.label === "Dashboard") return ;
              return(
              <Route
                key={opt.label}
                path={opt.label.toLowerCase().split(" ").join("-")}
                element={<Typography>Not up</Typography>}
              />
            )})}
          </Route>
        </Routes>
        {/* </Layout> */}
      </DashboardProvider>
    </AppThemeProvider>
  );
}

export default App;
