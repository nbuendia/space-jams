import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calendar } from "react-calendar";

//COMPONENTS
import CuriosityRadioAndMedia from "./CuriosityRadioAndMedia";

//MUI
import { Box, IconButton, Typography } from "@mui/material";
//MUI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import key from '../../../../secrets.json';
const apiKey = key["api-key"];

function CuriosityByDate() {
    const [showContent, setShowContent] = useState(false);
    const [data, getData] = useState(null);
    const [elem, getElem] = useState(null);
    const [date, getDate] = useState(null);

    //CHANGING DATE FROM NULL TO YYYY-MM-DD; CHECK IF NULL BEFORE CHANGING
    let formattedDate = date ? date.toLocaleDateString().split('/') : null;
    formattedDate = formattedDate ? `${formattedDate[2]}-${formattedDate[0]}-${formattedDate[1]}` : null;

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&earth_date=${formattedDate}`;

    function handleChange() {
        setShowContent(!showContent);
    }

    useEffect(() => {
        const elem = document.getElementById('top3');
        getElem(elem);

        if (formattedDate) {
            axios.get(url).then((res) => {
                if (res.data.photos.length) getData(res.data.photos);
                else getData(null);
            })
        }
    }, [formattedDate]);

    return(
        <>
            <hr/>
            <Typography fontFamily={'Shizuru'} fontSize={30} textAlign={'center'}>
                Search Photos By Date
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
            
            <Box id='top3' className="transition" style={{height: showContent ? '40vh' : 0}}>
                <Box className="curiosity-info">
                    <Calendar value={date} onChange={getDate} />

                    {data && date ? 
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

                {/* <CuriosityRadioAndMedia latest={latest} cameras={cameras}/> */}

            </Box>
        </>
    )
}

export default CuriosityByDate;