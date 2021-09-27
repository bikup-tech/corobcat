import styled from "styled-components";

import "./EmployeesListPage.scss";

// types
import { TUserResponse } from "../../../../types/employeeTypes";

// components
import EmployeeCard from "../../EmployeeCard/EmployeeCard";
import { CircularProgress } from "@mui/material";

const StyledEmployeePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const StyledLoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  font-size: 1.75rem;
`;

interface IEmployeesCardProps {
  employees: TUserResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

function EmployeesListPage(props: IEmployeesCardProps) {
  const { employees, isLoading, isError } = props;
  return (
    <>
      <div className="employees-title">Lista de empleados</div>
      <StyledEmployeePageContainer className="employees-container">
        {isLoading ? (
          <StyledLoadingWrapper>
            <CircularProgress />
            Cargando Datos...
          </StyledLoadingWrapper>
        ) : isError ? (
          <></>
        ) : (
          employees &&
          employees.map((employee) => {
            return <EmployeeCard key={employee._id} employee={employee} />;
          })
        )}
      </StyledEmployeePageContainer>
    </>
  );
}
export default EmployeesListPage;
