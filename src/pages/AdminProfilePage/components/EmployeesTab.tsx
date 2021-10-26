import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledTabContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}))`
  width: 100%;
  display: flex;
`;

const EmployeesTab: FC = () => {
  return <StyledTabContainer>hola que tal</StyledTabContainer>;
};

export default EmployeesTab;
