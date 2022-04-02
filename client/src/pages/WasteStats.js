import React, { useState } from "react";
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



function createData(month, plastic, metal, glass, other, year) {
  return { month, plastic, metal, glass, other, year };
}

const wasteData = [
  createData('January', 5, 6, 3, 2, 2021),
  createData('February', 6, 3, 5, 3, 2021),
  createData('March', 5, 4, 5, 2, 2021),
  createData('April', 5, 6, 2, 3, 2021),
  createData('May', 5, 6, 3, 2, 2021),
  createData('June', 6, 3, 5, 3, 2021),
  createData('July', 5, 4, 5, 2, 2021),
  createData('August', 5, 6, 2, 3, 2021),
  createData('September', 5, 6, 3, 2, 2021),
  createData('October', 6, 3, 5, 3, 2021),
  createData('November', 5, 4, 5, 2, 2021),
  createData('December', 5, 6, 2, 3, 2021),
  createData('January', 6, 4, 3, 3, 2022),
];

function WasteStats() {
  const [value, setValue] = React.useState(new Date());
  const [rows, setRows] = useState(wasteData.filter(x => (x.year === value.getFullYear())));

  return (
    <Container>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['year']}
          label="Year"
          value={value}
          onChange={(newValue) => {
            setValue(new Date(newValue["$d"]));
            API.getBins()
              .then(
                (res) => {
                  let testing = res.data.flatMap(x =>
                    x.collection_history.map(y => ({ type: x.type, ...y }))
                  ).filter(x =>
                    new Date(x.date).getFullYear() === newValue["$y"]
                    )
                    console.log(testing);});
                
            // .filter(x => (x.last_collected.year === newValue["$y"]));
            // setRows(newRows);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
      <Container sx={{ mt: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Month</StyledTableCell>
                <StyledTableCell align="right">Plastic&nbsp;(cu yd)</StyledTableCell>
                <StyledTableCell align="right">Metals&nbsp;(cu yd)</StyledTableCell>
                <StyledTableCell align="right">Glass&nbsp;(cu yd)</StyledTableCell>
                <StyledTableCell align="right">Other&nbsp;(cu yd)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
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
