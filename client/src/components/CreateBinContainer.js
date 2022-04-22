import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,

} from "@mui/material";
import API from "../utils/API";

import { useHistory } from "react-router-dom";

function CreateBinContainer() {
    //binNumber, location, lastCollected, status, type, and totalAmount
    const [binNumber, setBinNumber] = useState("");
    const [location, setLocation] = useState("");
    const [lastCollected, setLastCollected] = useState("");
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");
    const [totalAmount, setTotalAmount] = useState("");

    const handleCreateBinContainer = (event) => {
        if (
            binNumber !== "" &&
            location !== "" &&
            status !== "" &&
            type !== ""
        ) {
            handleCreateBin();
        }
    };

    function handleCreateBin() {
        API.createBin( {
            bin_number: binNumber,
            location: location,
            last_collected: lastCollected,
            status: status,
            type: type,
            total_amount: totalAmount
        })
    }

    return (
        <Container>
            <Grid xs={12} sx={{ m: 1 }}>
                <TextField
                    id="bin_number"
                    label="Bin Number"
                    onChange={(value) => setBinNumber(value.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            console.log("enter");
                        }
                    }}
                />
                {binNumber === "" ? <div> *Required</div> : <div></div>}
            </Grid>
            <Grid xs={12} sx={{ m: 1 }}>
                <TextField
                    id="location"
                    label="Location"
                    onChange={(value) => setLocation(value.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            console.log("enter");
                        }
                    }}
                />
                {location === "" ? <div> *Required</div> : <div></div>}
            </Grid>
            <Grid xs={12} sx={{ m: 1 }}>
                <TextField
                    id="last_collected"
                    label="Last Collected"
                    onChange={(value) => setLastCollected(value.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            console.log("enter");
                        }
                    }}
                />
            </Grid>
            <Grid xs={12} sx={{ m: 1 }}>
                <TextField
                    id="status"
                    label="Status"
                    onChange={(value) => setStatus(value.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            console.log("enter");
                        }
                    }}
                />
                {status === "" ? <div> *Required</div> : <div></div>}
            </Grid>
            <Grid xs={12} sx={{ m: 1 }}>
                <TextField
                    id="type"
                    label="Type"
                    onChange={(value) => setType(value.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            console.log("enter");
                        }
                    }}
                />
                {type === "" ? <div> *Required</div> : <div></div>}
            </Grid>
            <Grid xs={12} sx={{ m: 1 }}>
                <TextField
                    id="total_amount"
                    label="Total Amount"
                    onChange={(value) => setTotalAmount(value.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            console.log("enter");
                        }
                    }}
                />
            </Grid>
            <Button variant="contained" onClick={handleCreateBinContainer}>
                Create Bin Container
            </Button>
        </Container>
    );
}

export default CreateBinContainer;