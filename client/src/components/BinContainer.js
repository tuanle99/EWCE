import React from "react";
import { Container } from "@mui/material";

function BinContainer(props) {
  const { binNumber, binType, status, address } = props;

  return (
    <Container
      sx={{ mt: 1, p: 1 }}
      style={{ backgroundColor: "#34eb6b", borderRadius: 10 }}
    >
      {binType} Bin {binNumber}
      <ul>
        {address != null ? <li>Address: {address}</li> : ""}
        {status != null ? <li>Status: {status}</li> : ""}
      </ul>
    </Container>
  );
}

export default BinContainer;