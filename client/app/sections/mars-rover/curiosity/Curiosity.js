import React from 'react';

//COMPONENTS
import CuriosityLatest from './latest/CuriosityLatest';
import CuriosityByDate from './byDate/CuriosityByDate';

//MUI
import { Box, Typography } from '@mui/material';

function Curiosity(props) {
  const {
    data: { data, latest, cameras },
  } = props;

  //CHANGING DATE TO LOOK FROM YYYY-MM-DD TO ddd MMM DD YYYY
  let launchDate = data.launch_date.split('-');
  let landingDate = data.landing_date.split('-');
  launchDate = new Date(
    launchDate[0],
    launchDate[1] - 1,
    launchDate[2]
  ).toDateString();
  landingDate = new Date(
    landingDate[0],
    landingDate[1] - 1,
    landingDate[2]
  ).toDateString();

  return (
    <>
      <Box className='CuriosityInfo'>
        <Typography fontFamily={'Shizuru'} fontSize={25} textAlign={'center'}>
          {data.name} Rover Info
        </Typography>
      </Box>

      <Box className='CuriosityInfo' marginBottom={'25px'}>
        <Typography
          fontFamily={'Patrick Hand'}
          textAlign={'center'}
          color={'white'}
          margin={'15px'}
        >
          Status: {data.status[0].toUpperCase() + data.status.slice(1)} <br />
          Launch Date: {launchDate} <br />
          Landing Date: {landingDate}
        </Typography>
      </Box>

      <CuriosityLatest data={data} latest={latest} cameras={cameras} />
      <CuriosityByDate />
    </>
  );
}

export default Curiosity;
