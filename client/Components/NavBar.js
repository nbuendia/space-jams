import React from "react";

//MUI
import { Box, Tab, Tabs } from "@mui/material";

function NavBar(props) {
    const { value, setValue } = props;

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
    </Box>
  );
}

export default NavBar;