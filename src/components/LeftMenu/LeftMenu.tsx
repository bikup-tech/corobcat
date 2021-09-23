import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import StoreIcon from "@mui/icons-material/Store";
import { ListItemButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

import "./LeftMenu.scss";

function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="left-menu__header">
        <Avatar>CRC</Avatar>
      </div>
      <nav>
        <List>
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <NavLink to="/machines" className="left-menu__nav-item">
                <ListItemText primary="Maquinas" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemIcon>
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              <NavLink to="/maquina1" className="left-menu__nav-item">
                <ListItemText primary="Maquina 1" />
              </NavLink>
            </ListItemButton>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemIcon>
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              <NavLink to="/maquina2" className="left-menu__nav-item">
                <ListItemText primary="Maquina 2" />
              </NavLink>
            </ListItemButton>
          </List>
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <NavLink to="/finishedTasks" className="left-menu__nav-item">
                <ListItemText primary="Programas Terminados" />
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}

export default LeftMenu;
