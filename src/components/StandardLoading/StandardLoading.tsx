import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import { Typography } from "@mui/material";

const StyledLoadingWrapper = styled.div`
  display: flex;
  max-width: 35rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: white;
  margin-top: 3rem;
`;

const StyledLoadingText = styled(Typography)`
  margin-left: 1rem;
  font-size: 1.5rem;
`;

interface IStandardLoadingProps {
  text?: string;
}

const StandardLoading: FC<IStandardLoadingProps> = ({ text }) => {
  return (
    <StyledLoadingWrapper>
      <CircularProgress />
      <StyledLoadingText>{text ? text : "Cargando..."}</StyledLoadingText>
    </StyledLoadingWrapper>
  );
};

export default StandardLoading;
