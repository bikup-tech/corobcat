import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import "./CreateTaksDialog.scss";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { TInitialState } from "../../redux/store/initialState";
import { setIsCreateTaskModalOpen } from "../../redux/actions/mainActions";

function CreateTaksDialog() {
  const dispatch = useDispatch();

  const { isOpen, selectedMachine } = useSelector(
    (state: TInitialState) => state.mainReducer.createTaskModal
  );

  function handleClose() {
    dispatch(setIsCreateTaskModalOpen(false));
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateTaksDialog;
