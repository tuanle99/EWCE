import React, { useState } from 'react';
import { 
    Container,
    Grid,
    Button,
} from '@mui/material';

function RewardTracker(props) {
    const { requestor, rewardPoints } = props;
    const [ points, setPoints ] = useState(rewardPoints);
    const handleClick = () => {
        if (points >= 100) {
            setPoints(points - 100);
        }
      };
    console.log(points)
    return (
        <Container
        sx={{ mt: 1, p: 1 }}
        style={{ backgroundColor: "#34eb6b", borderRadius: 10 }}
        >
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h2>{requestor.first} {requestor.last}:</h2>
            </Grid>
            <Grid item xs={6}>
                <h2>{points} points</h2>
            </Grid>
            <Grid item xs={2}>
                <Button 
                variant="contained"
                onClick={handleClick}
                >
                    Redeem Voucher
                </Button>
            </Grid>
        </Grid>
        </Container>
    );
}
 
export default RewardTracker;