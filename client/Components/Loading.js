import React from 'react';

//MUI
import { Box, Typography } from '@mui/material';

function Loading() {
  return (
    <Box className='LoadingContainer'>
      <Typography fontSize={30} fontWeight={800} color={'whitesmoke'}>
        Waiting For The Sun to Eluminate The Earth...
      </Typography>
      <br />
      <img
        src='https://media.giphy.com/media/3o7WIB00yXujVt4WEo/giphy-downsized-large.gif'
        width='480'
        height='480'
        frameBorder='0'
        allowFullScreen
      />
    </Box>
  );
}

export default Loading;
