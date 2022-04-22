import CreateBinContainer from "../components/CreateBinContainer";
import React, { useState } from "react";
import { Container, Button, Menu, MenuItem, Grid, ButtonBase } from "@mui/material";
import { useHistory } from "react-router-dom";

function BinCreation() {
    const history = useHistory();
    return (
    <Container>
        <Container sx={{ textAlign: "center" }} spacing={2}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <CreateBinContainer />
                </Grid>
            </Grid>
        </Container>
        <Container sx={{ textAlign: "center" }} spacing={2}>
            <ButtonBase
            onClick={(event) => {
                history.push("/ewce/BinStatus");
            }}
            >
            Return
            </ButtonBase>
        </Container>
    </Container>

  )
        
}
  
  export default BinCreation;