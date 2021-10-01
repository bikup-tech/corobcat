import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// actions
import { login } from "../../redux/actions/authActions";

// styles
import styled from "styled-components";
import "./LoginPage.scss";

// components
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import { CircularProgress } from "@mui/material";
import { TInitialState } from "../../redux/store/initialState";

const StyledLoadingWrapper = styled.div`
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
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginLoading, loginError, user } = useSelector(
    (state: TInitialState) => state.authReducer
  );

  const valueRef = useRef<HTMLInputElement>(null);
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    if (user) {
      history.replace("/machines");
    }
    if (loginError) {
      setWarningMessage(loginError);
    }
  }, [user, loginError]);

  function handleLogInClick() {
    if (valueRef.current) {
      dispatch(login(valueRef.current.value));
    }
  }

  function handleKeyUp(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      handleLogInClick();
    }
  }

  return (
    <StyledLoadingWrapper>
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
            onKeyUp={handleKeyUp}
          />
          {loginLoading && <CircularProgress />}
          <small className="form__warningMessage">{warningMessage}</small>

          <button onClick={handleLogInClick} className="login__button">
            Login
          </button>
        </Paper>
      </Grid>
    </StyledLoadingWrapper>
  );
}

export default LoginPage;
