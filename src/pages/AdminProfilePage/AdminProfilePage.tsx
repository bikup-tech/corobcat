import { AppBar, Box, Tab, Tabs } from "@mui/material";

import { AnimatePresence } from "framer-motion";
import EmployeesTab from "./components/EmployeesTab/EmployeesTab";
import { FC } from "react";
import GeneralSettingsTab from "./components/GeneralSettingsTab/GeneralSettingsTab";
import { TSettingsResponse } from "../../types/settingsTypes";
import TabPanel from "./components/TabPanel";
import styled from "styled-components";
import { useState } from "react";
import userData from "../../mocks/users.json";

const StyledAdminProfileHeader = styled.div`
  width: 100%;
  display: flex;
  color: white;
  font-size: 1.75rem;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

interface IAdminProfilePageProps {
  settings: TSettingsResponse & { employees: any };
}

const AdminProfilePage: FC<IAdminProfilePageProps> = ({ settings }) => {
  const [value, setValue] = useState(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  console.log(settings);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledAdminProfileHeader>
        Zona de administración
      </StyledAdminProfileHeader>

      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          height: "calc(100% - 4rem)",
          flex: 1,
          boxSizing: "border-box",
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="admin tabs"
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab
              label="Ajustes generales"
              {...a11yProps(0)}
              sx={{ color: "white" }}
            />
            <Tab label="Empleados" {...a11yProps(1)} sx={{ color: "white" }} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} key="generalSettingsTab">
          <GeneralSettingsTab settings={settings} />
        </TabPanel>
        <TabPanel value={value} index={1} key="employeesTab">
          <EmployeesTab employees={settings.employees} />
        </TabPanel>
      </Box>
    </>
  );
};

export default AdminProfilePage;
