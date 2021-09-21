import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import React, { useState } from "react";

const initialState = {
  programNumber: "",
};

export default function useFinishTaskDialog() {
  const [isFinishTaskDialogOpen, setIsFinishTaskDialogOpen] = useState(false);

  const [finishTaskDialogState, setFinishTaskDialogState] =
    useState(initialState);

  function handleFinishTaskDialogClose() {
    setIsFinishTaskDialogOpen(false);
  }

  function handleFinishTaskDialogOpen(programNumber: string) {
    setIsFinishTaskDialogOpen(true);
    setFinishTaskDialogState({ ...finishTaskDialogState, programNumber });
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
        <Button
          onClick={handleFinishTaskDialogClose}
          autoFocus
          variant="contained"
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
