import React, { useState } from "react";

//MUI
import { Box, CardContent, IconButton, Typography } from "@mui/material";

//MUI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function PrevAPODContent (props) {
    const { currPhoto, titles, dates, descriptions } = props;
    const [showDescription, setShowDescription] = useState(false);

    let currTitle = titles[currPhoto];
    let currDate = dates[currPhoto].split('-');
    currDate = new Date(currDate[0], currDate[1] - 1, currDate[2]).toDateString();
    let currDescription = descriptions[currPhoto];

    function handleDescription() {
        setShowDescription(!showDescription);
    }

    return (
        <CardContent>
            <hr/>
            <Typography fontFamily={'Patrick Hand'} fontSize={15} textAlign={'center'} color={'whitesmoke'}>
                {currTitle} <br/>
                {currDate}
            </Typography>
            <hr/>

            {showDescription ? 
                <>
                    <IconButton onClick={handleDescription} style={{width: '100%'}}>
                        <KeyboardArrowUpIcon style={{color: 'whitesmoke'}} />
                    </IconButton>
                </> 
            :
                <>
                    <IconButton onClick={handleDescription} style={{width: '100%'}}>
                        <KeyboardArrowDownIcon style={{color: 'whitesmoke'}} />
                    </IconButton>
                </>
            }

            <Box className="transition" style={{height: showDescription ? '10vh' : 0}}>
                <Typography fontFamily={'Patrick Hand'} fontSize={15} textAlign={'center'} color={'whitesmoke'}>
                    {currDescription}
                </Typography>
            </Box>
            
        </CardContent>
    )
}

export default PrevAPODContent;