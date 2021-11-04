import { Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";
import FormikTextField from "../../../../components/FormikComponents/FormikTextField";
import styled from "styled-components";

const StyledNewEmployeeFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 60px;
  margin-bottom: 1rem;
`;

const StyledFlex100Height = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledText = styled(Typography)`
  font-weight: 600;
  margin-right: 1rem;
`;

const StyledButtonWrapper = styled.div`
  .MuiButton-root {
    min-width: unset;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const StyledMargin = styled.div`
  margin-right: 1rem;
`;

interface ICreateEmployeeFormProps {}

const CreateEmployeeForm: FC<ICreateEmployeeFormProps> = ({}) => {
  return (
    <StyledNewEmployeeFormContainer>
      <StyledFlex100Height>
        <StyledText>Crear Empleado: </StyledText>
      </StyledFlex100Height>
      <FormikTextField
        name="name"
        size="small"
        label="Nombre"
        placeholder="Nombre"
      />
      <StyledMargin />
      <FormikTextField
        name="surname"
        size="small"
        label="Apellidos"
        placeholder="Apellidos"
      />
      <StyledMargin />
      <FormikTextField
        name="employerCode"
        size="small"
        label="Cód. Emp."
        placeholder="Código empleado"
      />
      <StyledMargin />

      <StyledFlex100Height>
        <StyledButtonWrapper>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "2rem", height: "2rem" }}
            type="submit"
          >
            <AddIcon fontSize="small" />
          </Button>
        </StyledButtonWrapper>
      </StyledFlex100Height>
    </StyledNewEmployeeFormContainer>
  );
};

export default CreateEmployeeForm;
