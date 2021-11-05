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
import { finishTask, forceRender } from "../../../redux/actions/mainActions";

import { saveFinishedTask } from "../../../mocks/tasksRepository";
import { useDispatch } from "react-redux";

const initialState = {
  taskId: "",
  isAcceptButtonActive: false,
  employeeCode: "",
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
      employeeCode: "",
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
      employeeCode: target.value,
    }));
  }

  function handleAccept() {
    dispatch(
      finishTask(
        finishTaskDialogState.employeeCode,
        finishTaskDialogState.taskId
      )
    );
    setIsFinishTaskDialogOpen(false);
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
              value={finishTaskDialogState.employeeCode}
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
