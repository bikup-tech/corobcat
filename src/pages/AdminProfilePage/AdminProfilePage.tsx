import { AppBar, Box, Tab, Tabs } from '@mui/material';
import { FC, useEffect } from 'react';

import EmployeesTab from './components/EmployeesTab/EmployeesTab';
import GeneralSettingsTab from './components/GeneralSettingsTab/GeneralSettingsTab';
import { TSettingsResponse } from '../../types/settingsTypes';
import TabPanel from './components/TabPanel';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

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
  const history = useHistory();
  const [value, setValue] = useState(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const params: any = new URLSearchParams(window.location.search);

  useEffect(() => {
    const tab = params.get('tab') || 0;

    setValue(Number(tab));
  }, [params]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    history.push(`/admin?tab=${newValue}`);
  };

  return (
    <>
      <StyledAdminProfileHeader>
        Zona de administración
      </StyledAdminProfileHeader>

      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '100%',
          height: 'calc(100% - 4rem)',
          flex: 1,
          boxSizing: 'border-box',
        }}
      >
        <AppBar position='static'>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='admin tabs'
            indicatorColor='secondary'
            textColor='inherit'
          >
            <Tab
              label='Ajustes generales'
              {...a11yProps(0)}
              sx={{ color: 'white' }}
            />
            <Tab label='Empleados' {...a11yProps(1)} sx={{ color: 'white' }} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} key='generalSettingsTab'>
          <GeneralSettingsTab settings={settings} />
        </TabPanel>
        <TabPanel value={value} index={1} key='employeesTab'>
          <EmployeesTab employees={settings.employees || []} />
        </TabPanel>
      </Box>
    </>
  );
};

export default AdminProfilePage;
