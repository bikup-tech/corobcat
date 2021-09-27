import styled from "styled-components";

export const StyledMachinesHomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledTableWrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTableHeaderWrapper = styled.div`
  padding: 1rem 0;

  .machines-home-page__machine-title {
    font-size: 1.5rem;
  }
`;
