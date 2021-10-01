import styled from "styled-components";

export const StyledMachinesHomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledMachinesHomePageLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  font-size: 1.5rem;
  color: white;

  .MuiCircularProgress-root {
    margin-right: 1rem;
  }
`;

export const StyledTableWrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTableHeaderWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .flex-grow {
    flex: 1;
  }

  .machines-home-page__machine-title {
    font-size: 1.75rem;
    color: white;
  }

  .machines__header-actions {
    display: flex;
    justify-content: flex-end;
  }
`;
