import React, { useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

//COMPONENTS
import Perseverance from './perseverance/Perseverance';
import Curiosity from './curiosity/Curiosity';
import Opportunity from './opportunity/Opportunity';
import Spirit from './spirit/Spirit';

//HOOKS
import { useFetchData } from './hooks/useFetchdata';

//MUI
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';

function MarsRover() {
  const [value, setValue] = useState('curiosity');
  const [isLoading, roverData] = useFetchData();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  if (isLoading)
    return (
      <Box className='Loader'>
        <ClimbingBoxLoader loading={isLoading} color='white' size={20} />
      </Box>
    );

  return (
    <Container>
      <Box className='MarsRoverNav'>
        <Tabs centered value={value} onChange={handleChange}>
          <Tab
            label={
              <Typography fontSize={25} color={'whitesmoke'}>
                Perseverance
              </Typography>
            }
            value='perseverance'
            className='Tab'
          />
          <Tab
            label={
              <Typography fontSize={25} color={'whitesmoke'}>
                Curiosity
              </Typography>
            }
            value='curiosity'
            className='Tab'
          />
          <Tab
            label={
              <Typography fontSize={25} color={'whitesmoke'}>
                Opportunity
              </Typography>
            }
            value='opportunity'
            className='Tab'
          />
          <Tab
            label={
              <Typography fontSize={25} color={'whitesmoke'}>
                Spirit
              </Typography>
            }
            value='spirit'
            className='Tab'
          />
        </Tabs>
      </Box>

      {value === 'perseverance' ? (
        <Perseverance data={roverData.perseverance} />
      ) : value === 'curiosity' ? (
        <Curiosity data={roverData.curiosity} />
      ) : value === 'opportunity' ? (
        <Opportunity data={roverData.opportunity} />
      ) : (
        <Spirit data={roverData.spirit} />
      )}
    </Container>
  );
}

export default MarsRover;
