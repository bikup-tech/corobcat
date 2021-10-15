import styled from "styled-components";
import { maxWidth } from "../styles/styleConstants";

export const StyledTableHeaderWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: ${maxWidth}px;
  width: 100%;
  margin: auto;
  margin-bottom: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-weight: 700;
`;

export const StyledTableHeaderInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
