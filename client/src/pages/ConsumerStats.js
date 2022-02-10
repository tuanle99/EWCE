import React, { useState } from "react";
import {
  Container,
  Autocomplete,
  TextField,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import RequestContainer from "../components/RequestContainer";

let dummyData = [
  {
    requestor: {
      first: "John",
      middle: "",
      last: "Doe",
    },
    wasteAmount: 25,
    reward: 30,
    address: "123 Example Street",
  },
  {
    requestor: {
      first: "Peter",
      middle: "",
      last: "Parker",
    },
    wasteAmount: 20,
    reward: 47,
    address: "123 Example Street",
  },
  {
    requestor: {
      first: "J.K",
      middle: "",
      last: "Simmons",
    },
    wasteAmount: 15,
    reward: 50,
    address: "123 Example Street",
  },
];

function ConsumerStats() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [list, setList] = useState(dummyData);
  const [sortType, setSortType] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    setSortType(event.currentTarget.type);
    let newList = [];
    switch (event.currentTarget.type) {
      case "name":
        newList = list.sort((a, b) => {
          let a1 = a.requestor.first.toLowerCase();
          let a2 = a.requestor.last.toLowerCase();
          let b1 = b.requestor.first.toLowerCase();
          let b2 = b.requestor.last.toLowerCase();
          if (a1 < b1) return -1;
          if (a1 > b1) return 1;
          if (a1 === b1) {
            if (a2 < b2) return -1;
            if (a2 > b2) return 1;
            return 0;
          }
          return 0;
        });
        setList(newList);

        break;
      case "waste collected":
        newList = list.sort((a, b) => {
          return b.wasteAmount - a.wasteAmount;
        });
        setList(newList);

        break;
      case "reward points":
        newList = list.sort((a, b) => {
          return b.reward - a.reward;
        });
        setList(newList);

        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <Autocomplete
        id="Consumer Name"
        freeSolo
        options={list.map(
          (option) => option.requestor.first + " " + option.requestor.last
        )}
        renderInput={(params) => (
          <TextField {...params} label="Consumer name" />
        )}
      />
      <Button
        id="sort-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Sort {sortType !== "" ? "by " + sortType : ""}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="sort-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} type="name">
          Name
        </MenuItem>
        <MenuItem onClick={handleClose} type="waste collected">
          Waste Collected
        </MenuItem>
        <MenuItem onClick={handleClose} type="reward points">
          Reward Points
        </MenuItem>
      </Menu>
      <Container sx={{ mt: 4 }}>
        {list.map((data) => {
          return (
            <RequestContainer
              key={data.requestor.first + " " + data.requestor.last}
              requestor={data.requestor}
              wasteAmount={data.wasteAmount}
              reward={data.reward}
              address={data.address}
            />
          );
        })}
      </Container>
    </Container>
  );
}

export default ConsumerStats;
