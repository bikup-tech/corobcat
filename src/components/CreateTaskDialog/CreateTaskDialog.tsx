import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

import { Form } from "formik";
import FormikSelect from "../FormikComponents/FormikSelect";
import FormikTextField from "../FormikComponents/FormikTextField";
import { MACHINE_1 } from "../../constants/machineNames";
import PriorityBadge from "./components/PriorityBadge/PriorityBadge";
import { TInitialState } from "../../redux/store/initialState";
import styled from "styled-components";
import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";

const StyledCreateTaskDialogWrapper = styled(Dialog)`
  .MuiPaper-root {
    max-width: 26rem;
  }
`;

const StyledFlexCenteredWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface ICreateTaskDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  settings: any;
}

const machinesMock = ["Maquina1", "Maquina2"];

function CreateTaskDialog(props: ICreateTaskDialogProps) {
  const { isOpen, handleClose, settings } = props;

  const formikContext = useFormikContext<any>();

  const { selectedMachine } = useSelector(
    (state: TInitialState) => state.mainReducer.createTaskModal
  );

  useEffect(() => {
    formikContext.values.selectedMachine =
      selectedMachine === MACHINE_1 ? "Maquina1" : "Maquina2";

    formikContext.values.correctionalFactor =
      selectedMachine === MACHINE_1
        ? settings.correctionalFactorMachine1
        : settings.correctionalFactorMachine2;
  }, [selectedMachine]);

  useEffect(() => {
    if (!isOpen) {
      formikContext.resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    formikContext.values.correctionalFactor =
      formikContext.values.selectedMachine === "Maquina1"
        ? settings.correctionalFactorMachine1
        : settings.correctionalFactorMachine2;
  }, [
    formikContext.values.selectedMachine,
    formikContext.values.correctionalFactor,
  ]);

  return (
    <StyledCreateTaskDialogWrapper open={isOpen} onClose={handleClose}>
      <Form noValidate>
        <DialogTitle sx={{ textAlign: "center" }}>Nuevo programa</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormikTextField
                name="employee"
                label="Código de empleado"
                autofocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                name="programNumber"
                label="Nº Programa"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormikSelect
                name="material"
                label="Material"
                values={settings.materials}
              />
            </Grid>
            <Grid item xs={6}>
              <FormikSelect
                name="thickness"
                label="Espesor"
                values={settings.thicknesses}
              />
            </Grid>
            <Grid item xs={6}>
              <FormikTextField
                name="priority"
                label="Prioridad"
                type="number"
                min={1}
                max={10}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <StyledFlexCenteredWrapper>
                <PriorityBadge priority={formikContext.values.priority} />
              </StyledFlexCenteredWrapper>
            </Grid>
            <Grid item xs={6}>
              <FormikTextField
                name="duration"
                label="Tiempo"
                type="number"
                adornment="min"
                min={0}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormikTextField
                name="correctionalFactor"
                label="Factor corrector"
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <FormikSelect
                name="selectedMachine"
                label="Máquina"
                values={machinesMock}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Form>
    </StyledCreateTaskDialogWrapper>
  );
}

export default CreateTaskDialog;
