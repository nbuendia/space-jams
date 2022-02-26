import React from "react";

//COMPONENTS
import CuriosityRadioAndMedia from "./CuriosityRadioAndMedia";

//MUI
import { Box, Typography } from "@mui/material";

function CuriosityLatest(props) {
    const { latest, cameras, date, sol } = props;

    //CHANGING DATE TO LOOK FROM YYYY-MM-DD TO ddd MMM DD YYYY
    let formattedDate = date.split('-');
    formattedDate = new Date(formattedDate[0], formattedDate[1] - 1, formattedDate[2]).toDateString();
    
    return(
        <>
            <hr/>
            <Typography fontFamily={'Shizuru'} fontSize={30} textAlign={'center'}>
                Most Recent Curiosity Rover Photos
            </Typography>
            <hr/>

            <Box className="curiosity-info">
                <Typography fontFamily={'Patrick Hand'} fontSize={20} textAlign={"center"} color={'whitesmoke'} margin={'15px'} border={'1px solid #0366fc'}>
                    Taken on: {formattedDate} <br/>
                    Sol Day: {sol}
                </Typography>
            </Box>

            <CuriosityRadioAndMedia latest={latest} cameras={cameras}/>
        </>
    )

}

export default CuriosityLatest;