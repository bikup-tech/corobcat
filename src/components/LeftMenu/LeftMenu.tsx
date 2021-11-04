import "./LeftMenu.scss";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { MACHINE_1, MACHINE_2 } from "../../constants/machineNames";
import { NavLink, useHistory } from "react-router-dom";
import {
  ROUTE_ADMIN_PROFILE,
  ROUTE_EMPLOYEES,
  ROUTE_FINISHEDTASKS,
  ROUTE_MACHINES,
  ROUTE_MACHINES_NAME_FACTORY,
} from "../../routes/routes";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SettingsIcon from "@mui/icons-material/Settings";
import StoreIcon from "@mui/icons-material/Store";
import { logout } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";

function LeftMenu() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="left-menu">
      <div className="left-menu__header">
        <Avatar>CRC</Avatar>
        {/* TODO: Display del username */}
      </div>
      <nav className="left-menu__nav">
        <List>
          <ListItem disableGutters>
            <NavLink
              activeClassName="left-menu__nav-item--active"
              to={ROUTE_MACHINES}
              className="left-menu__nav-item"
            >
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
              activeClassName="left-menu__nav-item--active"
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
              activeClassName="left-menu__nav-item--active"
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
            <NavLink
              activeClassName="left-menu__nav-item--active"
              to={ROUTE_EMPLOYEES}
              className="left-menu__nav-item"
            >
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Lista de técnicos" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disableGutters>
            <NavLink
              activeClassName="left-menu__nav-item--active"
              to={ROUTE_FINISHEDTASKS}
              className="left-menu__nav-item"
            >
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText primary="Programas Terminados" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disableGutters>
            <NavLink
              activeClassName="left-menu__nav-item--active"
              to={ROUTE_ADMIN_PROFILE}
              className="left-menu__nav-item"
            >
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Zona Admin" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <div className="flex-grow"></div>

        <ListItem
          disableGutters
          className="left-menu__nav-item left-menu__nav-item--bottom"
        >
          <ListItemButton
            onClick={() => {
              dispatch(logout());
              history.replace("/");
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItemButton>
        </ListItem>
      </nav>
    </div>
  );
}

export default LeftMenu;
