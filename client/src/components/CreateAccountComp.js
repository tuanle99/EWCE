import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";

import { useHistory } from "react-router-dom";

function CreateAccountComp() {
  //first name, middle name, last name, username, password, phone, address
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState("");

  const [checkFirst, setCheckFirst] = useState(false);
  const [checkLast, setCheckLast] = useState(false);
  const [checkUsername, setCheckUsername] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkUserType, setCheckUserType] = useState(false);

  const [checkLogin, setCheckLogin] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const history = useHistory();

  const handleCreateAccount = (event) => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      password !== "" &&
      userType !== ""
    ) {
      setLoginMessage("Login Success");
      setCheckLogin(true);
      history.push(`/ewce`);
    } else {
      if (firstName === "") {
        setCheckFirst(true);
      }
      if (lastName === "") {
        setCheckLast(true);
      }
      if (username === "") {
        setCheckUsername(true);
      }
      if (password === "") {
        setCheckPassword(true);
      }
      if (userType === "") {
        setCheckUserType(true);
      }
      setLoginMessage("*** Missing Information ***");
    }
    console.log(
      firstName,
      middleName,
      lastName,
      username,
      password,
      phone,
      address,
      userType
    );
  };

  return (
    <Container>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="first_name"
          label="First Name"
          onChange={(value) => (
            setFirstName(value.target.value), setCheckFirst(false)
          )}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {checkFirst ? <div>*Required</div> : <div></div>}
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="middle_name"
          label="Middle Name"
          onChange={(value) => setMiddleName(value.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="last_name"
          label="Last Name"
          onChange={(value) => (
            setLastName(value.target.value), setCheckLast(false)
          )}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {checkLast ? <div>*Required</div> : <div></div>}
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="username"
          label="Username"
          onChange={(value) => (
            setUsername(value.target.value), setCheckUsername(false)
          )}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {checkFirst ? <div>*Required</div> : <div></div>}
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="password"
          label="Password"
          onChange={(value) => (
            setPassword(value.target.value), setCheckPassword(false)
          )}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {checkFirst ? <div>*Required</div> : <div></div>}
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="phone_number"
          label="Phone Number"
          onChange={(value) => setPhone(value.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="address"
          label="Address"
          onChange={(value) => setAddress(value.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
      </Grid>
      <Grid xs={12} sx={{ m: 2 }}>
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
              onClick={() => (
                setUserType("coordinator"), setCheckUserType(false)
              )}
            />
            <FormControlLabel
              value="collector"
              control={<Radio />}
              label="Collector"
              onClick={() => (
                setUserType("collector"), setCheckUserType(false)
              )}
            />
            <FormControlLabel
              value="consumer"
              control={<Radio />}
              label="Consumer"
              onClick={() => (setUserType("consumer"), setCheckUserType(false))}
            />
          </RadioGroup>
        </FormControl>
        {checkUserType ? <div>*Required</div> : <div></div>}
      </Grid>
      <Button variant="contained" onClick={handleCreateAccount}>
        Create Account
      </Button>
    </Container>
  );
}

export default CreateAccountComp;
