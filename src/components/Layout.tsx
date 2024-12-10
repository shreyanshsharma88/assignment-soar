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
  Toc,
} from "@mui/icons-material";
import { Box, Drawer, Stack, TextField, Typography } from "@mui/material";
import { FC, PropsWithChildren, useCallback } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useViewPort } from "../hooks";

export const BaseLayout = () => {
  return (
    <Layout>
      <Box zIndex={100}>
        <Outlet />
      </Box>
    </Layout>
  );
};
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isDesktop, isMobile } = useViewPort();
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <Box
      sx={{
        display: isDesktop ? "grid" : "column",
        gridTemplateColumns: "300px auto",
        gridTemplateRows: "100px auto",
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
          borderBottom: isDesktop ? "1px solid #e0e0e0" : "none",
        }}
      >
        <Header
          isMobile={isMobile}
          handleButtonClick={() => {
            setSearchParam({ sideMenu: "true" });
          }}
        />
      </Box>
      {isDesktop && (
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
      )}
      {isMobile && (
        <Box
          width="100%"
          bgcolor="common.white"
          display="flex"
          justifyContent="center"
        >
          <CustomTextInput />
        </Box>
      )}
      <Box
        sx={{
          gridArea: "outlet",
          overflow: "auto",
          zIndex: 0,
          maxWidth: '1650px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          "&::-webkit-scrollbar": {
            display: 'none'
          }
          
        }}
      >
        {/* <Outlet /> */}
        {children}
      </Box>
      {!!searchParam.get("sideMenu") && isMobile && (
        <SidebarDrawer
          open={true}
          handleClose={() => {
            const params = new URLSearchParams(searchParam);
            params.delete("sideMenu");
            setSearchParam(params);
          }}
        />
      )}
    </Box>
  );
};

const SidebarDrawer = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Drawer open={open} onClose={handleClose}>
      <SideBar />
    </Drawer>
  );
};

const SideBar = () => {
  const { isMobile } = useViewPort();
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
      pl={isMobile ? 2 : 4}
      overflow="auto"
    >
      <Stack pt={3} direction="row" gap={2} alignItems="center">
        <TabletMac fontSize="large" />
        <Typography variant="h3" fontWeight={700} color="info.dark">
          Soar Task
        </Typography>
      </Stack>
      <Stack direction="column" gap={isMobile ? 2 : 3} pt={isMobile ? 3 : 6}>
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

const Header = ({
  isMobile,
  handleButtonClick,
}: {
  isMobile: boolean;
  handleButtonClick: () => void;
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      width="100%"
      bgcolor="#fff"
      height="100%"
      p={2}
      px={isMobile ? 2 : 6}
      alignItems="center"
    >
      {isMobile && <Toc onClick={handleButtonClick} />}
      <Typography variant="h3" fontWeight={550}>
        Overview
      </Typography>
      <Stack direction="row" gap={2}>
        {!isMobile && <CustomTextInput />}
      </Stack>
    </Stack>
  );
};

const CustomTextInput = () => {
  const { isMobile } = useViewPort();
  return (
    <TextField
      placeholder="Search for something"
      slotProps={{
        input: {
          startAdornment: <Search sx={{ mr: "20px" }} />,
          sx: {
            backgroundColor: "primary.main",
            borderRadius: "25px",
            width: isMobile ? "340px" : "270px",
            height: "50px",
          },
        },
      }}
    />
  );
};

export default Layout;

export const sidebarOptions = [
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
