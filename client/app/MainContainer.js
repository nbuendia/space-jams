import React from 'react';

//MUI
import { Box } from '@mui/material';

//COMPONENTS
import Apod from './sections/apod/Apod';
import Epic from './sections/epic/Epic';
import MarsRover from './sections/mars-rover/MarsRover';
import Roadster from './sections/roadster/Roadster';
import ISS from './sections/international-space-station/ISS';
import ScrollButton from '../components/scroll-button/ScrollButton';

function MainContainer(props) {
  const { value } = props;
  const showScrollIcon = value === 'apod' || value === 'epic';

  return (
    <Box id='top' className='MainContainer'>
      {value === 'apod' ? (
        <Apod />
      ) : value === 'epic' ? (
        <Epic />
      ) : value === 'mars rover' ? (
        <MarsRover />
      ) : value === 'international space station' ? (
        <ISS />
      ) : (
        <Roadster />
      )}

      {showScrollIcon && <ScrollButton />}
    </Box>
  );
}

export default MainContainer;
