import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";

// icons
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PeopleIcon from '@mui/icons-material/People';

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
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              <NavLink to="/machines" className="left-menu__nav-item">
                <ListItemText primary="Maquinas" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              <NavLink to="/maquina1" className="left-menu__nav-item">
                <ListItemText primary="Maquina 1" />
              </NavLink>
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
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
                <PeopleIcon />
              </ListItemIcon>
              <NavLink to="/employees" className="left-menu__nav-item">
                <ListItemText primary="Técnicos" />
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}

export default LeftMenu;
