import React from "react";

//MUI
import { Box, Paper, Typography } from "@mui/material";
import CuriosityLatest from "./CuriosityLatest";

function Curiosity(props) {
    const { data, latest } = props;

    const launchDate = data.launch_date.split('-');
    const landingDate = data.landing_date.split('-');
    const formattedLaunchDate = new Date(launchDate[0], launchDate[1], launchDate[2]).toDateString();
    const formattedLandingDate = new Date(landingDate[0], landingDate[1], landingDate[2]).toDateString();

    console.log('DATA', data);
    console.log('LATEST', latest);

    return(
        <>
            <Box className="prev-apod-card" style={{marginBottom: '25px'}}>
                <Typography fontFamily={'Shizuru'} fontSize={25} textAlign={'center'}>
                    Rover Info: 
                </Typography>
                <hr/>

                <Paper elevation={5} style={{backgroundColor: 'transparent', padding: '10px'}}>
                    <Typography fontFamily={'Patrick Hand'} textAlign={'center'} color={'white'}>
                        Status: {data.status[0].toUpperCase() + data.status.slice(1)} <br/>
                        Launch Date: {formattedLaunchDate} <br/>
                        Landing Date: {formattedLandingDate}
                    </Typography>
                </Paper>
            </Box>

            <CuriosityLatest latest={latest}/>
        </>
    )

}

export default Curiosity;