import React, { useState } from "react";
import { Grid, Container, ButtonBase } from "@mui/material";

import LoginComp from "../components/LoginComp";
import CreateAccountComp from "../components/CreateAccountComp";

function Login() {
  const [createAcc, changeCreateAcc] = useState(false);

  //history is use to navigate to the next page
  // const history = useHistory();

  return (
    <Container sx={{ textAlign: "center" }} spacing={2}>
      {createAcc ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CreateAccountComp />
            <Grid item xs={12} sx={{ mt: 2 }}>
              <ButtonBase
                onClick={() => changeCreateAcc(false)}
                variant="contained"
              >
                Already have an account? Click here to login
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <LoginComp />
          <Grid item xs={12} sx={{ mt: 2 }}>
            <ButtonBase
              onClick={() => changeCreateAcc(true)}
              variant="contained"
            >
              Don't have an account? Click to create an account
            </ButtonBase>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default Login;
