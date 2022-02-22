import React from "react";

//COMPONENTS
import CuriosityRadioAndMedia from "./CuriosityRadioAndMedia";

//MUI
import { Typography } from "@mui/material";

function CuriosityLatest(props) {
    const { latest } = props;

    //CHANGING DATE TO LOOK FROM YYYY-MM-DD TO ddd MMM DD YYYY
    let date = latest[0].earth_date.split('-');
    date = new Date(date[0], date[1] - 1, date[2]).toDateString();
    const sol = latest[0].sol;
    
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

            <CuriosityRadioAndMedia latest={latest} />
        </>
    )

}

export default CuriosityLatest;