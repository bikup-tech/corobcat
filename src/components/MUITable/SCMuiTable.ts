import styled from "styled-components";

import { maxWidth } from "../../styles/styleConstants";

export const StyledTablePageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
  max-width: ${maxWidth}px;

  .MuiTableCell-head {
    color: #002740;
    font-weight: 700;
    background-color: #f5f5f5;
    border-bottom: 2px solid rgba(150, 150, 150, 1);
    line-height: 1.25;
    font-size: 1.1rem;
  }

  .MuiTableCell-body {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 1.1rem;
  }
`;

export const StyledLoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  font-size: 1.75rem;

  .MuiCircularProgress-root {
    margin-right: 1rem;
  }
`;
