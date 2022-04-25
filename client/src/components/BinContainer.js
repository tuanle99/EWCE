import React, { useState } from "react";
import {
  Container,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

function BinContainer(props) {
  const { binNumber, binType, status, address, totalAmount, lastCollected } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({ status });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    switch (event.currentTarget.type) {
      case "Full":
        setState("Full");
        break;
      case "Partially Full":
        setState("Partially Full");
        break;
      case "Empty":
        setState("Empty");
        break;
      default:
        break;
    }
  };

  return (
    <Container
      sx={{ mt: 1, p: 1 }}
      style={{ backgroundColor: "#34eb6b", borderRadius: 10 }}
    >
      <Container
        sx={{ mt: 1, p: 1 }}
        style={{ backgroundColor: "#34eb6b", borderRadius: 10 }}
      >
        {binType} Bin {binNumber}
        <ul>
          {address !== "" ? <li>Address: {address}</li> : ""}
          {status !== "" ? <li>Status: {status}</li> : ""}
        </ul>
      </Container>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={status}
          name="radio-buttons-group"
          anchorEl={anchorEl}
          open={open}
          OnClick={handleClick}
        >
          <FormControlLabel
            value="Full"
            control={<Radio />}
            label="Full"
            onClick={handleClick}
          />
          <FormControlLabel
            value="Partially Full"
            control={<Radio />}
            label="Partially Full"
            onClick={handleClick}
          />
          <FormControlLabel
            value="Empty"
            control={<Radio />}
            label="Empty"
            onClick={handleClick}
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}

export default BinContainer;
