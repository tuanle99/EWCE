import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  TextField,
  Container
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker
} from "@mui/lab"
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import API from "../utils/API";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createNewData(month, plastic, metal, glass, other) {
  return { month, plastic, metal, glass, other };
}

const yearlyData = [
  createNewData("January", 0, 0, 0, 0),
  createNewData("February", 0, 0, 0, 0),
  createNewData("March", 0, 0, 0, 0),
  createNewData("April", 0, 0, 0, 0),
  createNewData("May", 0, 0, 0, 0),
  createNewData("June", 0, 0, 0, 0),
  createNewData("July", 0, 0, 0, 0),
  createNewData("August", 0, 0, 0, 0),
  createNewData("September", 0, 0, 0, 0),
  createNewData("October", 0, 0, 0, 0),
  createNewData("November", 0, 0, 0, 0),
  createNewData("December", 0, 0, 0, 0)
]

function resetData() {
  yearlyData.forEach(element => {
    element.plastic = 0;
    element.metal = 0;
    element.glass = 0;
    element.other = 0;
  });
}

function WasteStats() {
  const [value, setValue] = React.useState(new Date());
  const [rows, setRows] = useState(yearlyData.map((x) => x));

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['year']}
          label="Year"
          value={value}
          onChange={(newValue) => {
            setValue(new Date(newValue["$d"]));
            resetData();
            API.getBins()
              .then(
                (res) => {
                  let yrData = res.data.flatMap(x =>
                    x.collection_history.map(y => ({ type: x.type, ...y }))
                  ).filter(x =>
                    new Date(x.date).getFullYear() === newValue["$y"]
                  )
                  yrData.forEach(element => {
                    let month = new Date(element.date).getMonth();
                    let typ = element.type;
                    let amt = element.amount;
                    yearlyData[month][typ] = yearlyData[month][typ] + amt;

                  });
                  let filterData = yearlyData.map((x) => x);
                  setRows(filterData);
                })
          }
          }
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
      <Container sx={{ mt: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Month</StyledTableCell>
                <StyledTableCell align="right">Plastic&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Metal&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Glass&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Other&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.month}>
                  <StyledTableCell component="th" scope="row">
                    {row.month}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.plastic}</StyledTableCell>
                  <StyledTableCell align="right">{row.metal}</StyledTableCell>
                  <StyledTableCell align="right">{row.glass}</StyledTableCell>
                  <StyledTableCell align="right">{row.other}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
}

export default WasteStats;
