import React from "react";
import { PuffLoader } from "react-spinners";
import { Calendar } from "react-calendar";

//MUI
import { Box, Typography } from "@mui/material";

function CuriosityCalendar(props) {
    const {isLoading, data, date, getDate} = props;

    return(
        <Box className="curiosity-info">
            <Calendar value={date} onChange={getDate} />
            
            {isLoading ? 
                <>
                    <br/>
                    <PuffLoader loading={isLoading} color='white' />
                </>
            : data && date ? 
                <Typography fontFamily={'Patrick Hand'} fontSize={20} textAlign={"center"} color={'whitesmoke'} margin={'15px'} border={'1px solid #0366fc'} padding={'15px'}>
                    Taken on: {date.toDateString()} <br/>
                    Sol Day: {data[0].sol}
                </Typography>
            : !data && date ?
                <Typography fontFamily={'Patrick Hand'} fontSize={20} textAlign={"center"} color={'whitesmoke'} margin={'15px'} border={'1px solid #0366fc'} padding={'15px'}>
                    No Photos for {date.toLocaleDateString()}. <br/>
                    Please Choose Another Date.
                </Typography>
            :
                <Typography fontFamily={'Patrick Hand'} fontSize={20} textAlign={"center"} color={'whitesmoke'} margin={'15px'} border={'1px solid #0366fc'} padding={'15px'}>
                    Please Choose Date.
                </Typography>
            }
        </Box>
    )
}

export default CuriosityCalendar;