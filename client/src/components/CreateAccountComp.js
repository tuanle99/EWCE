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
import API from "../utils/API";

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
  const [reward, setReward] = useState(0);
  const [currentBag, setCurrentBag] = useState(0);
  const [totalRedeem, setTotalRedeem] = useState(0);

  const [checkLogin, setCheckLogin] = useState(false);

  const history = useHistory();

  const handleCreateAccount = (event) => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      password !== "" &&
      userType !== ""
    ) {
      setCheckLogin(true);
      handleCreateUser();
      // history.push(`/ewce`);
    }
  };

  function handleCreateUser() {
    switch (userType) {
      case "coordinator":
        API.createCoordinator({
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          username: username,
          password: password,
          phone: phone,
          address: address,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => console.log(err));
        break;
      case "collector":
        API.createCollector({
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          username: username,
          password: password,
          phone: phone,
          address: address,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => console.log(err));
        break;
      case "consumer":
        API.createConsumer({
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          username: username,
          password: password,
          phone: phone,
          address: address,
          reward_pts: reward,
          current_bag: currentBag,
          total_redeem: totalRedeem,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => console.log(err));
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="first_name"
          label="First Name"
          onChange={(value) => setFirstName(value.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {firstName === "" ? <div>*Required</div> : <div></div>}
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
          onChange={(value) => setLastName(value.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {lastName === "" ? <div>*Required</div> : <div></div>}
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="username"
          label="Username"
          onChange={(value) => setUsername(value.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {username === "" ? <div>*Required</div> : <div></div>}
      </Grid>
      <Grid xs={12} sx={{ m: 1 }}>
        <TextField
          id="password"
          label="Password"
          onChange={(value) => setPassword(value.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
            }
          }}
        />
        {password === "" ? <div>*Required</div> : <div></div>}
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
      {userType === "consumer" ? (
        <div>
          <Grid xs={12} sx={{ m: 1 }}>
            <TextField
              id="reward_pts"
              label="Reward Points"
              type="number"
              onChange={(value) => setReward(value.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log("enter");
                }
              }}
            />
          </Grid>
          <Grid xs={12} sx={{ m: 1 }}>
            <TextField
              id="current_bag"
              label="Current Bag"
              type="number"
              onChange={(value) => setCurrentBag(value.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log("enter");
                }
              }}
            />
          </Grid>
          <Grid xs={12} sx={{ m: 1 }}>
            <TextField
              id="total_redeem"
              label="Total Redeem"
              type="number"
              onChange={(value) => setTotalRedeem(value.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log("enter");
                }
              }}
            />
          </Grid>
        </div>
      ) : (
        <div></div>
      )}
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
      <Button variant="contained" onClick={handleCreateAccount}>
        Create Account
      </Button>
    </Container>
  );
}

export default CreateAccountComp;
