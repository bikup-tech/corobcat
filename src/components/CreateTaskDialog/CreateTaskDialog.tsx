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
import { Form } from "formik";
import styled from "styled-components";
import FormikTextField from "../FormikComponents/FormikTextField";

const StyledCreateTaskDialogWrapper = styled(Dialog)`
  .MuiPaper-root {
    max-width: 26rem;
  }
`;

interface ICreateTaskDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

function CreateTaskDialog(props: ICreateTaskDialogProps) {
  const { isOpen, handleClose } = props;

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
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormikTextField name="material" label="Material" />
            </Grid>
            <Grid item xs={6}>
              <FormikTextField
                name="thickness"
                label="Espesor (mm)"
                type="number"
                adornment="mm"
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
