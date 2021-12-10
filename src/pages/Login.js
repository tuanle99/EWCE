import React, { useState } from "react";
import { TextField, Grid, Container, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkLogin, setCheckLogin] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const history = useHistory();

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setLoginMessage("");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setLoginMessage("");
  };

  const handleLogin = (event) => {
    if (username === "test" && password === "password") {
      history.push(`/home`);
      setCheckLogin(true);
    } else {
      setCheckLogin(false);
      setLoginMessage("Incorrect Username or Password");
    }
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-helperText"
            label="Username"
            helperText="Enter test"
            onChange={handleUsername}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-helperText"
            label="Password"
            helperText="Enter password"
            onChange={handlePassword}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleLogin}>Login</Button>
        </Grid>
        <Grid item xs={12}>
          {checkLogin ? <div></div> : <div>{loginMessage}</div>}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
