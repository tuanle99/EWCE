import React from "react";
import { Container } from "@mui/material";

function RequestContainer(props) {
  const { requestor, wasteAmount, reward, address } = props;

  return (
    <Container
      sx={{ mt: 1, p: 1 }}
      style={{ backgroundColor: "#34eb6b", borderRadius: 10 }}
    >
      {requestor.first} {requestor.last}'s Request
      <ul>
        {wasteAmount != null ? <li>Waste Collected: {wasteAmount} kg</li> : ""}
        {reward != null ? <li>Reward Points: {reward} pts</li> : ""}
        {address != null ? <li>Address: {address}</li> : ""}
      </ul>
    </Container>
  );
}

export default RequestContainer;
