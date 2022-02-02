import React from "react";
import { Container, Grid } from "@mui/material";

function RequestContainer(props) {
  const { requestor } = props;

  return (
    <Container sx={{ m: 1 }}>
      <Grid
        sx={{ p: 1 }}
        style={{ backgroundColor: "#34eb6b", borderRadius: 10 }}
      >
        {requestor}'s Request
      </Grid>
    </Container>
  );
}

export default RequestContainer;
