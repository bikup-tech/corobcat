import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import { ListItemButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

import "./LeftMenu.scss";
import {
  ROUTE_EMPLOYEES,
  ROUTE_FINISHEDTASKS,
  ROUTE_MACHINES,
  ROUTE_MACHINES_NAME_FACTORY,
} from "../../routes/routes";
import { MACHINE_1, MACHINE_2 } from "../../constants/machineNames";

function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="left-menu__header">
        <Avatar>CRC</Avatar>
      </div>
      <nav>
        <List>
          <ListItem disableGutters>
            <NavLink to={ROUTE_MACHINES} className="left-menu__nav-item">
              <ListItemButton>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Maquinas" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <List component="div" disablePadding>
            <NavLink
              to={ROUTE_MACHINES_NAME_FACTORY(MACHINE_1)}
              className="left-menu__nav-item"
            >
              <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                  <PrecisionManufacturingIcon />
                </ListItemIcon>
                <ListItemText primary="Maquina 1" />
              </ListItemButton>
            </NavLink>
            <NavLink
              to={ROUTE_MACHINES_NAME_FACTORY(MACHINE_2)}
              className="left-menu__nav-item"
            >
              <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                  <PrecisionManufacturingIcon />
                </ListItemIcon>
                <ListItemText primary="Maquina 2" />
              </ListItemButton>
            </NavLink>
          </List>

          <ListItem disableGutters>
            <NavLink to={ROUTE_EMPLOYEES} className="left-menu__nav-item">
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Lista de técnicos" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disableGutters>
            <NavLink to={ROUTE_FINISHEDTASKS} className="left-menu__nav-item">
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText primary="Programas Terminados" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}

export default LeftMenu;
