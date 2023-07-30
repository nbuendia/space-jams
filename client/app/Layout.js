import React, { useState } from 'react';

//MUI
import { Box } from '@mui/material';

//COMPONENTS
import NavBar from './NavBar';
import MainContainer from './MainContainer';

function Layout() {
  const [value, setValue] = useState('apod');

  return (
    <Box className='LayoutContainer'>
      <NavBar value={value} setValue={setValue} />
      <MainContainer value={value} />
    </Box>
  );
}

export default Layout;
