import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import React, { useState } from "react";
import { saveFinishedTask } from "../../../mocks/tasksRepository";
import { useDispatch } from "react-redux";
import { forceRender } from "../../../redux/actions/mainActions";

const initialState = {
  taskId: "",
};

export default function useFinishTaskDialog() {
  const dispatch = useDispatch();

  const [isFinishTaskDialogOpen, setIsFinishTaskDialogOpen] = useState(false);

  const [finishTaskDialogState, setFinishTaskDialogState] =
    useState(initialState);

  function handleFinishTaskDialogOpen(taskId: string) {
    setIsFinishTaskDialogOpen(true);
    setFinishTaskDialogState({ ...finishTaskDialogState, taskId });
  }

  function handleFinishTaskDialogClose() {
    setIsFinishTaskDialogOpen(false);
  }

  function handleAccept() {
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
           Estás seguro de que deseas finalizar el programa?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFinishTaskDialogClose}>Cancelar</Button>
        <Button onClick={handleAccept} autoFocus variant="contained">
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
