import React, { useState } from "react";

//MUI
import { Box, IconButton } from "@mui/material";
//MUI ICONS
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

//COMPONENTS
import NavBar from "./NavBar";
import Home from "./landing-page/Home";
import EPIC from "./EPIC/EPIC";
import MarsRover from "./mars-rover/MarsRover";
import Roadster from "./Roadster/Roadster";
import ISS from "./international-space-station/ISS";

function Layout() {
    const [value, setValue] = useState('home');

    function handleClick() {
        let elem = document.getElementById('top');

        elem.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    
    return (
        <Box className="nav-bar-container">
            <NavBar value={value} setValue={setValue} />

            <Box id='top' className="main-container">
                {value === 'home' ? <Home />
                : value === 'epic' ? <EPIC />
                : value === 'mars rover' ? <MarsRover />
                : value === 'international space station' ? <ISS />
                : <Roadster />}

                <Box className="top-button-container">
                    <IconButton className="top-button" onClick={handleClick}>
                        <KeyboardDoubleArrowUpIcon style={{color: 'whitesmoke', fontSize: '45'}}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Layout;