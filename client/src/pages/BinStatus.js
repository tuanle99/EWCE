import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Menu,
  MenuItem,
  Grid,
  ButtonBase,
} from "@mui/material";
import BinContainer from "../components/BinContainer";
import { useHistory } from "react-router-dom";

import API from "../utils/API";

let dummydata = [
  {
    binNumber: 3,
    binType: "Metal",
    status: "Full",
    address: "848 ExampleNeighborhood",
  },

  {
    binNumber: 5,
    binType: "Plastic",
    status: "Partially Full",
    address: "123 ExampleStreet",
  },

  {
    binNumber: 2,
    binType: "Paper",
    status: "Empty",
    address: "240 ExampleRoad",
  },
];

function BinStatus() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [list, setList] = useState([]);
  const [sortType, setSortType] = useState("");
  const [createBin, changeCreateBin] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    API.getBins().then((res) => {
      // console.log(res.data);
      setList(res.data);
    });
  }, []);

  console.log(list);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    setSortType(event.currentTarget.type);
    let newList = [];
    // switch (event.currentTarget.type) {
    //   case "number":
    //     newList = list.sort((a, b) => {
    //       if (a.binNumber < b.binNumber) return -1;
    //       if (a.binNumber > b.binNumber) return 1;
    //       if (a.binNumber === b.binNumber) return 0;
    //       return 0;
    //     });
    //     setList(newList);

    //     break;
    //   case "type":
    //     newList = list.sort((a, b) => {
    //       let aText = a.binType.toLowerCase();
    //       let bText = b.binType.toLowerCase();
    //       if (aText < bText) return -1;
    //       if (aText > bText) return 1;
    //       if (aText === bText) return 0;
    //       return 0;
    //     });
    //     setList(newList);

    //     break;
    //   case "status":
    //     newList = list.sort((a, b) => {
    //       let aStatus = 0;
    //       let bStatus = 0;

    //       if (a.status === "Full") aStatus = 2;
    //       else if (a.status === "Partially Full") aStatus = 1;
    //       else aStatus = 0;

    //       if (b.status === "Full") bStatus = 2;
    //       else if (b.status === "Partially Full") bStatus = 1;
    //       else bStatus = 0;

    //       if (aStatus > bStatus) return -1;
    //       if (aStatus < bStatus) return 1;
    //       if (aStatus === bStatus) return 0;
    //       return 0;
    //     });
    //     setList(newList);

    //     break;
    //   default:
    //     break;
    // }
  };
  return (
    <Container>
      <Container sx={{ textAlign: "center" }} spacing={2}>
        <ButtonBase
          onClick={(event) => {
            history.push("/ewce/BinCreation");
          }}
        >
          Create a Bin!
        </ButtonBase>
      </Container>

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
        <MenuItem onClick={handleClose} type="number">
          Bin Number
        </MenuItem>
        <MenuItem onClick={handleClose} type="type">
          Bin Type
        </MenuItem>
        <MenuItem onClick={handleClose} type="status">
          Bin Status
        </MenuItem>
      </Menu>
      <Container sx={{ mt: 4 }}>
        {list.map((data) => {
          return (
            <BinContainer
              key={data.type + "Bin" + data.bin_number}
              binNumber={data.bin_number}
              binType={data.type}
              status={data.status}
              address={data.location}
            />
          );
        })}
      </Container>
    </Container>
  );
}

export default BinStatus;
