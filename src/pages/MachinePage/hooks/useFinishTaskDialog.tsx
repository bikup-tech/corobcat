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
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          EL MOURIN NO TE NI IDEA {finishTaskDialogState.programNumber}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFinishTaskDialogClose}>Disagree</Button>
        <Button onClick={handleFinishTaskDialogClose} autoFocus>
          Agree
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
