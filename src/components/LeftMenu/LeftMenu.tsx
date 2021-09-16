import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
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
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              <NavLink to="/" className="left-menu__nav-item">
                <ListItemText primary="Maquinas" />
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}

export default LeftMenu;
