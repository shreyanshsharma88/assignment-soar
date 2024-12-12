import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Stack,
  Tab,
  useTheme
} from "@mui/material";
import { useState } from "react";
import { useViewPort } from "../../hooks";
import { EditProfile } from "./EditProfile";

type TTabOption = "edit-profile" | "preferences" | "security";
export const Settings = () => {
  const { isMobile } = useViewPort();
  const [selectedTab, setSelectedTab] = useState<TTabOption>("edit-profile");
  const theme = useTheme();
  return (
    <Stack
      p={2}
      px={isMobile ? 0 : 4}
      borderRadius="25px"
      bgcolor="common.white"
      height="100%"
    >
      <TabContext value={selectedTab}>
        <TabList
          onChange={(_, v) => {
            setSelectedTab(v as TTabOption);
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          textColor={theme.palette.common.black as any}
          sx={{
            ".Mui-selected": {
              color: theme.palette.common.black,
              fontWeight: "550",
            },
            ".MuiTabs-indicator": {
              backgroundColor: theme.palette.common.black,
            },
            ".MuiTabs-flexContainer": {
              gap: 5,
              borderBottom: "2px solid #e0e0e0",
            },
          }}
        >
          {(["edit-profile", "preferences", "security"] as TTabOption[]).map(
            (tab) => (
              <Tab
                key={tab}
                label={tab.split("-").join(" ")}
                value={tab}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "22px",
                  fontWeight: 500,
                }}
              />
            )
          )}
        </TabList>
        <TabPanel value="edit-profile">
          <EditProfile />
        </TabPanel>
        <TabPanel value="preferences">404 not found</TabPanel>
        <TabPanel value="security">404 not found</TabPanel>
      </TabContext>
    </Stack>
  );
};
