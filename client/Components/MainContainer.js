import React, { useEffect, useState } from "react";

//MUI
import { Box } from "@mui/material";

//COMPONENTS
import Home from "./landing-page/Home";
import EPIC from "./EPIC/EPIC";
import MarsRover from "./mars-rover/MarsRover";
import Roadster from "./Roadster/Roadster";
import ISS from "./international-space-station/ISS";
import ScrollButton from "./ScrollButton";

function MainContainer(props) {
    const { value } = props;
    const [elem, getElem] = useState(null);

    const scrollIcon = value === 'home' || value === 'epic';

    useEffect(() => {        
        let elem = document.getElementById('top');
        getElem(elem);
    }, []);

    return (
        <Box id='top' className="main-container">
            {value === 'home' ? <Home />
            : value === 'epic' ? <EPIC />
            : value === 'mars rover' ? <MarsRover />
            : value === 'international space station' ? <ISS />
            : <Roadster />}

             {scrollIcon && <ScrollButton elem={elem}/>}
        </Box>
    );
}

export default MainContainer;