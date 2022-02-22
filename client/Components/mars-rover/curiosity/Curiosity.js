import React from "react";

//COMPONENTS
import CuriosityLatest from "./CuriosityLatest";

//MUI
import { Box, Paper, Typography } from "@mui/material";

function Curiosity(props) {
    const { data, latest } = props;

    //CHANGING DATE TO LOOK FROM YYYY-MM-DD TO ddd MMM DD YYYY
    let launchDate = data.launch_date.split('-');
    let landingDate = data.landing_date.split('-');
    launchDate = new Date(launchDate[0], launchDate[1] - 1, launchDate[2]).toDateString();
    landingDate = new Date(landingDate[0], landingDate[1] - 1, landingDate[2]).toDateString();

    return(
        <>
            <Box className="curiosity-info">
                <Typography fontFamily={'Shizuru'} fontSize={25} textAlign={'center'}>
                    Rover Info: 
                </Typography>
                <hr/>

                <Paper elevation={5} style={{backgroundColor: 'transparent', padding: '10px'}}>
                    <Typography fontFamily={'Patrick Hand'} textAlign={'center'} color={'white'}>
                        Status: {data.status[0].toUpperCase() + data.status.slice(1)} <br/>
                        Launch Date: {launchDate} <br/>
                        Landing Date: {landingDate}
                    </Typography>
                </Paper>
            </Box>

            <CuriosityLatest latest={latest}/>
        </>
    )

}

export default Curiosity;