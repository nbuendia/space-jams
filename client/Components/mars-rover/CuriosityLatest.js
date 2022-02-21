import React from "react";

//COMPONENTS
import CuriosityMedia from "./CuriosityMedia";

//MUI
import { Grid, Typography } from "@mui/material";

function CuriosityLatest(props) {
    const { latest } = props;

    let date = latest[0].earth_date.split('-');
    date = new Date(date[0], date[1] - 1, date[2]).toDateString();
    const sol = latest[0].sol;

    console.log('TEST', date, sol);

    return(
        <>
            <hr/>
            <Typography fontFamily={'Shizuru'} fontSize={25} textAlign={'center'}>
                Most Recent Curiosity Rover Photos
            </Typography>
            <hr/>
            
            <Typography fontFamily={'Patrick Hand'} textAlign={"center"} color={'whitesmoke'} margin={'15px'}>
                Taken on: {date} <br/>
                Sol Day: {sol}
            </Typography>

            <Grid container spacing={1} justifyContent={'center'} style={{overflowY: 'auto'}}>
                <CuriosityMedia media={latest} />
            </Grid>
        </>
    )

}

export default CuriosityLatest;