import React, { useEffect, useState } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import axios from "axios";

//COMPONENTS
import CuriosityCalendar from "./CuriosityCalendar";
import CuriosityDateRadioAndMedia from "./CuriosityDateRadioAndMedia";

//MUI
import { Box, IconButton, Typography } from "@mui/material";
//MUI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import key from '../../../../../secrets.json';
const apiKey = key["api-key"];

function CuriosityByDate() {
    const [isLoading, setLoading] = useStateIfMounted(true);
    const [showContent, setShowContent] = useState(false);
    const [data, getData] = useState(null);
    const [date, getDate] = useState(null);

    //CHANGING DATE FROM NULL TO YYYY-MM-DD; CHECK IF NULL BEFORE CHANGING
    let formattedDate = date ? date.toLocaleDateString().split('/') : null;
    formattedDate = formattedDate ? `${formattedDate[2]}-${formattedDate[0]}-${formattedDate[1]}` : null;

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&earth_date=${formattedDate}`;

    function handleChange() {
        setShowContent(!showContent);
    }

    useEffect(() => {
        setLoading(true);
        if (formattedDate) {
            axios.get(url).then((res) => {
                if (res.data.photos.length) getData(res.data.photos);
                else getData(null);
            }).catch((err) => {
                console.error('Oh No! Something went wrong!', err);
            })
        }

        setTimeout(() => {
            setLoading(false);
        }, 2000);

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
            
            <Box id='top3' className="transition" style={{height: showContent ? '60vh' : 0}}>
                <CuriosityCalendar isLoading={isLoading} data={data} date={date} getDate={getDate} />

                {data ?
                    <>
                        <CuriosityDateRadioAndMedia photos={data} isLoading={isLoading} date={date} />
                    </>
                :
                    ""
                }
            </Box>
        </>
    )
}

export default CuriosityByDate;