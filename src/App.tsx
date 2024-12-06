import { Route, Routes } from "react-router-dom";
import { AppThemeProvider, DashboardProvider } from "./providers";
import { Layout } from "./components";

function App() {
  return (
    <>
      <AppThemeProvider>
        <Layout>
          <Routes>
            <Route element={<DashboardProvider />}>
              <Route path="/dashboard" />
            </Route>
            <Route path="/profile" />
          </Routes>
        </Layout>
      </AppThemeProvider>
    </>
  );
}

export default App;
