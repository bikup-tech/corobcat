import { Typography, Box } from "@mui/material";
import { height } from "@mui/system";
import { FC } from "react";
import { StyledFlexGrow } from "../../../StyledComponents/StyledTableHeader";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: FC<ITabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ height: "calc(100% - 3rem)" }}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "100%", flex: 1 }}>
          {children}
          <StyledFlexGrow />
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
