import React, { useState } from "react";

//COMPONENTS
import CuriosityRadioAndMedia from "./CuriosityRadioAndMedia";

//MUI
import { Box, IconButton, Typography } from "@mui/material";
//MUI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function CuriosityLatest(props) {
    const { data, latest, cameras } = props;
    const [showContent, setShowContent] = useState(false);

    //CHANGING DATE TO LOOK FROM YYYY-MM-DD TO ddd MMM DD YYYY
    let date =  data.max_date.split('-');
    date = new Date(date[0], date[1] - 1, date[2]).toDateString();

    function handleChange() {
        setShowContent(!showContent);
    }
    
    return(
        <>
            <hr/>
            <Typography fontFamily={'Shizuru'} fontSize={30} textAlign={'center'}>
                Most Recent {data.name} Rover Photos
                {showContent ? 
                    <IconButton className='button' onClick={handleChange} style={{marginLeft: '10px'}}>
                        <KeyboardArrowUpIcon style={{color: 'whitesmoke', fontSize: 30}} />
                    </IconButton>
                :
                    <IconButton className='button' onClick={handleChange} style={{marginLeft: '10px'}}>
                        <KeyboardArrowDownIcon style={{color: 'whitesmoke', fontSize: 30}} />
                    </IconButton>
                }
            </Typography>
            <hr/>
            
            <Box className="transition" style={{height: showContent ? '40vh' : 0}}>
                <Box className="curiosity-info">
                    <Typography fontFamily={'Patrick Hand'} fontSize={20} textAlign={"center"} color={'whitesmoke'} margin={'15px'} border={'1px solid #0366fc'} padding={'15px'}>
                        Taken on: {date} <br/>
                        Sol Day: {data.max_sol}
                    </Typography>
                </Box>

                <CuriosityRadioAndMedia latest={latest} cameras={cameras}/>
            </Box>
        </>
    )

}

export default CuriosityLatest;