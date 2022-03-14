import React, { useEffect } from "react";

//MUI
import { Box, IconButton } from "@mui/material";
//MUI ICONS
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function ScrollButton(props) {
    const { elem } = props;

    //ADDS BEHAVIOR TO ARROW CLICK TO SCROLL BACK TO TOP SMOOTHLY RATHER THAN JUST SNAPPING BACK
    function handleClick() {
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
        if (elem) elem.addEventListener('scroll', handleClassChange);
        return () => elem ? elem.removeEventListener('scroll', handleClassChange) : null;
    }, [elem, handleClassChange]);

    return (
        <Box id='arrow' className="top-button-container hidden">
            <IconButton className="button" onClick={handleClick}>
                <KeyboardDoubleArrowUpIcon style={{color: 'whitesmoke', fontSize: '45'}}/>
            </IconButton>
        </Box>
    );
}

export default ScrollButton;