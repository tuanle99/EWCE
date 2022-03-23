import React, { useState, useEffect } from "react";
import { TextField, Grid, Button } from "@mui/material";

import { useHistory } from "react-router-dom";

function LoginComp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkLogin, setCheckLogin] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const history = useHistory();

  useEffect(() => {
    setUsername("");
    setPassword("");
    setCheckLogin(false);
    setLoginMessage("");
  }, []);

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
      setLoginMessage("Login Success");
      setCheckLogin(true);
      history.push(`/ewce`);
    } else if (username === "") {
      setLoginMessage("*** Username required ***");
    } else if (password === "") {
      setLoginMessage("*** Password required ***");
    } else {
      setLoginMessage("Incorrect Username or Password");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="username_login"
          label="Username"
          helperText="Enter test"
          onChange={handleUsername}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="password_login"
          label="Password"
          helperText="Enter password"
          onChange={handlePassword}
          type="password"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
      </Grid>
      <Grid Item spacing={2} xs={12} sx={{ mt: 2 }}>
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </Grid>

      <Grid item xs={12}>
        {checkLogin ? <div></div> : <div>{loginMessage}</div>}
      </Grid>
    </Grid>
  );
}

export default LoginComp;
