import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Form } from "formik";
import styled from "styled-components";
import FormikTextField from "../FormikComponents/FormikTextField";
import PriorityBadge from "./components/PriorityBadge/PriorityBadge";

import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { TInitialState } from "../../redux/store/initialState";
import { useEffect } from "react";
import FormikSelect from "../FormikComponents/FormikSelect";

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
}

const materialsMock = ["Madera", "Hierro", "Acero", "Aluminio"];

function CreateTaskDialog(props: ICreateTaskDialogProps) {
  const { isOpen, handleClose } = props;

  const formikContext = useFormikContext<any>();

  const { selectedMachine } = useSelector(
    (state: TInitialState) => state.mainReducer.createTaskModal
  );

  useEffect(() => {
    formikContext.values.selectedMachine = selectedMachine;
  }, [selectedMachine]);

  useEffect(() => {
    if (!isOpen) {
      formikContext.resetForm();
    }
  }, [isOpen]);

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
                placeholder="Material"
                values={materialsMock}
              />
            </Grid>
            <Grid item xs={6}>
              <FormikTextField
                name="thickness"
                label="Espesor (mm)"
                type="number"
                adornment="mm"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormikTextField
                name="priority"
                label="Prioridad"
                type="number"
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
              <FormikTextField
                name="selectedMachine"
                label="Máquina"
                fullWidth
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
