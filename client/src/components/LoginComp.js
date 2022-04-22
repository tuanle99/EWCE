import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import { useHistory } from "react-router-dom";
import API from "../utils/API";

function LoginComp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkLogin, setCheckLogin] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const [userType, setUserType] = useState("");

  const history = useHistory();

  useEffect(() => {
    setUsername("");
    setPassword("");
    setCheckLogin(false);
    setLoginMessage("");
    setUserType("");
  }, []);

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setLoginMessage("");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setLoginMessage("");
  };

  const handleVerify = (event) => {
    switch (userType) {
      case "coordinator":
        console.log("coordinator");
        API.getCoordinators()
          .then(
            (res) => {
              console.log(res.data);
              if (
                res.data.some(
                  (user) =>
                    user.username === username && user.password === password
                )
              ) {
                console.log("login");
              } else {
                console.log("fail");
              }
            },
            (error) => {
              console.log(error);
            }
          )
          .catch((err) => {
            console.log(err);
          });
        break;
      case "collector":
        console.log("collector");
        API.getCollectors()
          .then(
            (res) => {
              console.log(res.data);
              if (
                res.data.some(
                  (user) =>
                    user.username === username && user.password === password
                )
              ) {
                console.log("login");
              } else {
                console.log("fail");
              }
            },
            (error) => {
              console.log(error);
            }
          )
          .catch((err) => {
            console.log(err);
          });
        break;
      case "consumer":
        console.log("consumer");
        API.getConsumers()
          .then(
            (res) => {
              console.log(res.data);
              if (
                res.data.some(
                  (user) =>
                    user.username === username && user.password === password
                )
              ) {
                console.log("login");
              } else {
                console.log("fail");
              }
            },
            (error) => {
              console.log(error);
            }
          )
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        break;
    }

    history.push(`/ewce`);
  };

  const handleLogin = (event) => {
    if (username !== "" && password !== "" && userType !== "") {
      setLoginMessage("Login Success");
      setCheckLogin(true);
      handleVerify();
    } else if (username === "") {
      setLoginMessage("*** Username required ***");
    } else if (password === "") {
      setLoginMessage("*** Password required ***");
    } else if (userType === "") {
      setLoginMessage("*** User Type required ***");
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

      <Grid item xs={12} sx={{ m: 2 }}>
        <FormControl>
          <FormLabel id="user-type-label">Select User Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="user-type-label"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="coordinator"
              control={<Radio />}
              label="Coordinator"
              onClick={() => setUserType("coordinator")}
            />
            <FormControlLabel
              value="collector"
              control={<Radio />}
              label="Collector"
              onClick={() => setUserType("collector")}
            />
            <FormControlLabel
              value="consumer"
              control={<Radio />}
              label="Consumer"
              onClick={() => setUserType("consumer")}
            />
          </RadioGroup>
        </FormControl>
        {userType === "" ? <div>*Required</div> : <div></div>}
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
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
