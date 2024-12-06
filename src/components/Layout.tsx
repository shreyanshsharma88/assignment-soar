import {
  CreditCard,
  CreditScore,
  Equalizer,
  Handyman,
  Home,
  MonetizationOn,
  Person2,
  Search,
  Settings,
  TabletMac,
  TipsAndUpdates,
} from "@mui/icons-material";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { FC, PropsWithChildren, useCallback } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const Layout: FC<PropsWithChildren> = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        gridTemplateRows: "100px 1fr",
        gridTemplateAreas: `
            "sidebar header"
            "sidebar outlet"
          `,
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          gridArea: "header",
          zIndex: 1,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: "sidebar",
          bgcolor: "primary.light",
          borderRight: "1px solid #e0e0e0",
          height: "100%",
        }}
      >
        <SideBar />
      </Box>
      <Box sx={{ gridArea: "outlet", overflow: "auto", p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPath = useCallback(
    (path: string) => {
      return location.pathname.includes(path);
    },
    [location.pathname]
  );
  return (
    <Stack
      bgcolor="primary.light"
      height="100%"
      borderRight="1px solid #e0e0e0"
      p={2}
      pl={4}
      overflow="auto"
    >
      <Stack pt={3} direction="row" gap={2} alignItems="center">
        <TabletMac fontSize="large" />
        <Typography variant="h3" fontWeight={700} color="info.dark">
          Soar Task
        </Typography>
      </Stack>
      <Stack direction="column" gap={3} pt={6}>
        {sidebarOptions.map((option) => (
          <Stack
            key={option.label}
            direction="row"
            gap={2}
            borderRadius={1}
            p={1}
            alignItems="center"
            onClick={() =>
              navigate(option.label.toLowerCase().split(" ").join("-"))
            }
            sx={{
              cursor: "pointer",
              ".MuiSvgIcon-root": {
                fontSize: 34,
                color: isCurrentPath(
                  option.label.toLowerCase().split(" ").join("-")
                )
                  ? "#000"
                  : "gray",
              },
            }}
          >
            {option.icon}
            <Typography
              color={
                isCurrentPath(option.label.toLowerCase().split(" ").join("-"))
                  ? "#000"
                  : "gray"
              }
              variant="h5"
              fontWeight={550}
            >
              {option.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      width="100%"
      bgcolor="#fff"
      height="100%"
      p={2}
      px={6}
      alignItems="center"
    >
      <Typography variant="h3" fontWeight={550}>
        Overview
      </Typography>
      <Stack direction="row" gap={2}>
        <TextField
          placeholder="Search for something"
          slotProps={{
            input: {
              startAdornment: <Search sx={{mr:'20px'}} />,
              sx:{
                backgroundColor: 'primary.main',
                borderRadius: '25px',
                width: '270px',
                height: '50px',
              }
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Layout;

const sidebarOptions = [
  { label: "Dashboard", icon: <Home /> },
  { label: "Transactions", icon: <MonetizationOn /> },
  { label: "Accounts", icon: <Person2 /> },
  { label: "Investments", icon: <Equalizer /> },
  { label: "Credit Cards", icon: <CreditCard /> },
  { label: "Services", icon: <Handyman /> },
  { label: "Loans", icon: <CreditScore /> },
  { label: "My Privileges", icon: <TipsAndUpdates /> },
  { label: "Settings", icon: <Settings /> },
];
