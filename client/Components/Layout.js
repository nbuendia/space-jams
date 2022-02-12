import React, { useState } from "react";

//MUI
import { Box } from "@mui/material";

//COMPONENTS
import NavBar from "./NavBar";
import Home from "./landing-page/Home";
import Epic from "./EPIC/Epic";
import MarsRover from "./mars-rover/MarsRover";
import Roadster from "./Roadster/Roadster";
import ISS from "./international-space-station/ISS";

function Layout() {
    const [value, setValue] = useState('home');

  return (
    <Box className="nav-bar-container">
        <NavBar value={value} setValue={setValue} />

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

export default Layout;