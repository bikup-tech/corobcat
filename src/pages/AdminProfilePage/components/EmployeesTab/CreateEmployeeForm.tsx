import { Button, Typography } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import FormikTextField from "../../../../components/FormikComponents/FormikTextField";
import AddIcon from "@mui/icons-material/Add";

const StyledNewEmployeeFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
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

const StyledButton = styled(Button)`
  min-width: unset;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
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
        <StyledButton
          variant="contained"
          size="small"
          sx={{ width: "2rem", height: "2rem" }}
          type="submit"
        >
          <AddIcon fontSize="small" />
        </StyledButton>
      </StyledFlex100Height>
    </StyledNewEmployeeFormContainer>
  );
};

export default CreateEmployeeForm;
