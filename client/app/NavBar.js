import React from 'react';

//MUI
import { Box, Tab, Tabs } from '@mui/material';

function NavBar(props) {
  const { value, setValue } = props;

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Box className='NavBarContainer'>
      <Tabs
        centered
        orientation='vertical'
        value={value}
        onChange={handleChange}
        className='TabContainer'
      >
        <Tab
          label='APOD'
          value='apod'
          className='Tab'
          style={{ color: 'whitesmoke' }}
        />
        <Tab
          label='EPIC'
          value='epic'
          className='Tab'
          style={{ color: 'whitesmoke' }}
        />
        <Tab
          label='MARS ROVERS'
          value='mars rover'
          className='Tab'
          style={{ color: 'whitesmoke' }}
        />
        <Tab
          label='INTERNATIONAL SPACE STATION'
          value='international space station'
          className='Tab'
          style={{ color: 'whitesmoke' }}
        />
        <Tab
          label='ROADSTER'
          value='roadster'
          className='Tab'
          style={{ color: 'whitesmoke' }}
        />
      </Tabs>
    </Box>
  );
}

export default NavBar;
