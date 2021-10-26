import { Tabs, Tab, Box, AppBar } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import CorrectionalFactorTab from "./components/GeneralSettingsTab";
import EmployeesTab from "./components/EmployeesTab";
import TabPanel from "./components/TabPanel";

const StyledAdminProfileHeader = styled.div`
  width: 100%;
  display: flex;
  color: white;
  font-size: 1.75rem;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

type TCorrectionalFactors = {
  machine1: number;
  machine2: number;
};

interface IAdminProfilePageProps {
  correctionalFactors: TCorrectionalFactors;
}

const AdminProfilePage: FC<IAdminProfilePageProps> = ({
  correctionalFactors,
}) => {
  const [value, setValue] = useState(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

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
        <AnimatePresence>
          <TabPanel value={value} index={0}>
            <CorrectionalFactorTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EmployeesTab />
          </TabPanel>
        </AnimatePresence>
      </Box>
    </>
  );
};

export default AdminProfilePage;
