import React, { useEffect } from "react";

//MUI
import { Box, IconButton } from "@mui/material";
//MUI ICONS
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

//COMPONENTS
import Home from "./landing-page/Home";
import EPIC from "./EPIC/EPIC";
import MarsRover from "./mars-rover/MarsRover";
import Roadster from "./Roadster/Roadster";
import ISS from "./international-space-station/ISS";

function MainContainer(props) {
    const { value } = props;

    //ADDS BEHAVIOR TO ARROW CLICK TO SCROLL BACK TO TOP SMOOTHLY RATHER THAN JUST SNAPPING BACK
    function handleClick() {
        let elem = document.getElementById('top');

        elem.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    //FUNCTION THAT ADDS & REMOVES HIDDEN CLASS TO ARROW CONTAINER
    function handleClassChange(event) {
        const window = event.target;
        const arrow = document.getElementById('arrow');

        if (window.scrollTop === 0) arrow.classList.add('hidden');
        else if (window.scrollTop > 0) arrow.classList.remove('hidden');
    };

    //ADDS AND REMOVES SCROLL EVENT LISTENER TO MAIN CONTAINER
    useEffect(() => {        
        let elem = document.getElementById('top');

        elem.addEventListener('scroll', handleClassChange);
        return () => elem.removeEventListener('scroll', handleClassChange);
    }, [handleClassChange]);

    return (
        <Box id='top' className="main-container">
            {value === 'home' ? <Home />
            : value === 'epic' ? <EPIC />
            : value === 'mars rover' ? <MarsRover />
            : value === 'international space station' ? <ISS />
            : <Roadster />}

            <Box id='arrow' className="top-button-container hidden">
                <IconButton className="button" onClick={handleClick}>
                    <KeyboardDoubleArrowUpIcon style={{color: 'whitesmoke', fontSize: '45'}}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default MainContainer;