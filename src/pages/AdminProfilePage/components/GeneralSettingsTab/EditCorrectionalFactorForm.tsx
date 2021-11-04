import { Button, Typography } from "@mui/material";
import { MACHINE_1, MACHINE_2 } from "../../../../constants/machineNames";

import { FC } from "react";
import FormikTextField from "../../../../components/FormikComponents/FormikTextField";
import SaveIcon from "@mui/icons-material/Save";
import styled from "styled-components";
import { updateCorrectionalFactor } from "../../../../redux/actions/mainActions";
import { useDispatch } from "react-redux";
import { useFormikContext } from "formik";

const StyledTabTitle = styled(Typography)`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledNewItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  width: 100%;
`;

const StyledButtonWrapper = styled.div`
  flex: 1;
  .MuiButton-root {
    min-width: unset;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
    margin-top: 0.6rem;
  }
`;

interface IEditCorrectionalFactorFromProps {}

const EditCorrectionalFactorFrom: FC<IEditCorrectionalFactorFromProps> = () => {
  const formikContext = useFormikContext<any>();
  const dispatch = useDispatch();

  function handleMachineClick(machineName: string) {
    const machineFormFieldName =
      machineName === MACHINE_1
        ? "correctionalFactorMachine1"
        : "correctionalFactorMachine2";

    formikContext.setFieldTouched(machineFormFieldName, true);

    const value = Number(formikContext.values[machineFormFieldName]);

    if (value) {
      dispatch(updateCorrectionalFactor(machineName, value));
    }
  }

  return (
    <>
      <StyledTabTitle>Editar factor corrector:</StyledTabTitle>
      <StyledNewItemWrapper>
        <FormikTextField
          type="number"
          min={0}
          max={100}
          name="correctionalFactorMachine1"
          label="Máquina 1"
          placeholder="Nuevo factor corrector M1"
          adornment="%"
          fullWidth
        />
        <StyledButtonWrapper>
          <Button
            className="m1Button"
            variant="contained"
            size="small"
            disableElevation
            onClick={() => {
              handleMachineClick(MACHINE_1);
            }}
          >
            <SaveIcon fontSize="small" />
          </Button>
        </StyledButtonWrapper>
      </StyledNewItemWrapper>
      <StyledNewItemWrapper>
        <FormikTextField
          type="number"
          min={0}
          max={100}
          name="correctionalFactorMachine2"
          label="Máquina 2"
          placeholder="Nuevo factor corrector M2"
          adornment="%"
          fullWidth
        />

        <StyledButtonWrapper>
          <Button
            variant="contained"
            size="small"
            disableElevation
            onClick={() => {
              handleMachineClick(MACHINE_2);
            }}
          >
            <SaveIcon fontSize="small" />
          </Button>
        </StyledButtonWrapper>
      </StyledNewItemWrapper>
    </>
  );
};

export default EditCorrectionalFactorFrom;
