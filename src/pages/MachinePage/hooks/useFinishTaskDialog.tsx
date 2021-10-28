import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import { saveFinishedTask } from "../../../mocks/tasksRepository";
import { useDispatch } from "react-redux";
import { forceRender } from "../../../redux/actions/mainActions";

const initialState = {
  taskId: "",
  isAcceptButtonActive: false,
};

export default function useFinishTaskDialog() {
  const dispatch = useDispatch();

  const [isFinishTaskDialogOpen, setIsFinishTaskDialogOpen] = useState(false);

  const [finishTaskDialogState, setFinishTaskDialogState] =
    useState(initialState);

  function handleFinishTaskDialogOpen(taskId: string) {
    setIsFinishTaskDialogOpen(true);
    setFinishTaskDialogState({
      ...finishTaskDialogState,
      taskId,
      isAcceptButtonActive: false,
    });
  }

  function handleFinishTaskDialogClose() {
    setIsFinishTaskDialogOpen(false);
  }

  function handleEmployeeCodeChange({ target }: any) {
    let hasValue = false;
    if (target.value) {
      hasValue = true;
    }

    setFinishTaskDialogState((prevState) => ({
      ...prevState,
      isAcceptButtonActive: hasValue,
    }));
  }

  function handleAccept() {
    // TODO: Dispatch de la action que comprova si existeix el employeeCode i l'asigna i finalitza.
    saveFinishedTask(finishTaskDialogState.taskId);
    setIsFinishTaskDialogOpen(false);
    dispatch(forceRender());
  }

  const FinishTaskDialog = (
    <Dialog
      open={isFinishTaskDialogOpen}
      onClose={handleFinishTaskDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Confirmación finalizar programa"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
           Introduce tu código de empleado para finalizar el programa:
        </DialogContentText>
        <Grid container>
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              label="Cód. Empleado"
              placeholder="Código de empleado"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleEmployeeCodeChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFinishTaskDialogClose}>Cancelar</Button>
        <Button
          onClick={handleAccept}
          autoFocus
          variant="contained"
          disabled={finishTaskDialogState.isAcceptButtonActive ? false : true}
        >
          Finalizar programa
        </Button>
      </DialogActions>
    </Dialog>
  );

  return {
    FinishTaskDialog,
    handleFinishTaskDialogOpen,
    handleFinishTaskDialogClose,
  };
}
