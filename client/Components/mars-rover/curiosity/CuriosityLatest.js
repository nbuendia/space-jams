import React from "react";

//COMPONENTS
import CuriosityRadioAndMedia from "./CuriosityRadioAndMedia";

//MUI
import { Box, Typography } from "@mui/material";

function CuriosityLatest(props) {
    const { data, latest, cameras } = props;

    //CHANGING DATE TO LOOK FROM YYYY-MM-DD TO ddd MMM DD YYYY
    let date =  data.max_date.split('-');
    date = new Date(date[0], date[1] - 1, date[2]).toDateString();
    
    return(
        <>
            <hr/>
            <Typography fontFamily={'Shizuru'} fontSize={30} textAlign={'center'}>
                Most Recent Curiosity Rover Photos
            </Typography>
            <hr/>

            <Box className="curiosity-info">
                <Typography fontFamily={'Patrick Hand'} fontSize={20} textAlign={"center"} color={'whitesmoke'} margin={'15px'} border={'1px solid #0366fc'}>
                    Taken on: {date} <br/>
                    Sol Day: {data.max_sol}
                </Typography>
            </Box>

            <CuriosityRadioAndMedia latest={latest} cameras={cameras}/>
        </>
    )

}

export default CuriosityLatest;