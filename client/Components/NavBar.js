import React, { useState } from "react";

//MUI
import { Box, Tab, Tabs } from "@mui/material";

//COMPONENTS
import Home from "./Home";
import Epic from "./EPIC/Epic";
import MarsRover from "./mars-rover/MarsRover";
import Roadster from "./Roadster/Roadster";
import ISS from "./international-space-station/ISS";

function NavBar() {
    const [value, setValue] = useState('home');

    function handleChange(event, newValue) {
        setValue(newValue);
    }

  return (
    <Box className="nav-bar-container">
        <Box className="inner-nav-bar">
            <Tabs centered orientation='vertical' value={value} onChange={handleChange} className='tab-container'>
                <Tab label='HOME' value='home' className="tab" style={{color: 'whitesmoke'}}/>
                <Tab label='EPIC' value='epic' className="tab" style={{color: 'whitesmoke'}}/>
                <Tab label='MARS ROVER' value='mars rover' className="tab" style={{color: 'whitesmoke'}}/>
                <Tab label='INTERNATIONAL SPACE STATION' value='international space station' className="tab" style={{color: 'whitesmoke'}}/>
                <Tab label='ROADSTER' value='roadster' className="tab" style={{color: 'whitesmoke'}}/>
            </Tabs>
        </Box>

        <Box className="main-container">
            {value === 'home' ? <Home />
            : value === 'epic' ? <Epic />
            : value === 'mars rover' ? <MarsRover />
            : value === 'international space station' ? <ISS />
            : <Roadster />}
        </Box>
    </Box>
  );
}

export default NavBar;