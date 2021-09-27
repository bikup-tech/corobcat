import React, {useRef} from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import styled from "styled-components";

const StyleLoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

  .MuiPaper-root {
    padding: 3rem 1.25rem;
    width: 17rem;
  }
  .MuiGrid-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .MuiAvatar-root {
    margin-bottom: 1rem;
    background-color: #1bbd7e;
  }
  .MuiFormControl-root {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .MuiButton-root {
    margin-top: 1rem;
  }
`;

function LoginPage() {
    const valueRef = useRef<HTMLInputElement>(null)
    function handleLogInClick(){
        if(valueRef.current){
            console.log(valueRef.current.value);
        }
    }

  return (
    <StyleLoadingWrapper>
      <Grid>
        <Paper elevation={10}>
          <Grid>
            <Avatar>
              <LoginIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField
            label="Código de empleado"
            placeholder="Entra el código de empleado"
            fullWidth
            required
            inputRef={valueRef}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleLogInClick}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </StyleLoadingWrapper>
  );
}

export default LoginPage;
