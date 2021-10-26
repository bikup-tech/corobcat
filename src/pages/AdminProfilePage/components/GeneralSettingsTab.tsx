import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const StyledTabContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}))`
  width: 100%;
  display: flex;
`;

const StyledTabTitle = styled(Typography)`
  font-size: 1.15rem;
  font-weight: 600;
`;

const GeneralSettingsTab: FC = () => {
  return (
    <StyledTabContainer>
      <StyledTabTitle>Editar factor corrector:</StyledTabTitle>
      <StyledTabTitle>Lista de materiales:</StyledTabTitle>
    </StyledTabContainer>
  );
};

export default GeneralSettingsTab;
