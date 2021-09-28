import { useEffect, useRef, useState } from "react";
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
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginLoading, loginError, user } = useSelector(
    (state: any) => state.authReducer
  );
  const valueRef = useRef<HTMLInputElement>(null);
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    if (user) {
      history.replace("/machines");
      setWarningMessage("");
    }
    if (loginError) {
      setWarningMessage(loginError);
    }
  }, [user, loginError]);

  function handleLogInClick() {
    if (valueRef.current) {
      dispatch(login(valueRef.current.value));
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
          {loginLoading && <CircularProgress />}
          <small className="form_warningMessage">{warningMessage}</small>
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
