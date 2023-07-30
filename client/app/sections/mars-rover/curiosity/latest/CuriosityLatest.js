import React, { useState } from 'react';

//COMPONENTS
import CuriosityRadioAndMedia from './CuriosityRadioAndMedia';
import { Header } from '../../../../../components/Header';

//HOOKS
import { useGetIcon } from '../../hooks/useGetIcon';

//MUI
import { Box, Typography } from '@mui/material';

function CuriosityLatest(props) {
  const { data, latest, cameras } = props;
  const [getIcon, showContent] = useGetIcon();

  //CHANGING DATE TO LOOK FROM YYYY-MM-DD TO ddd MMM DD YYYY
  let date = data.max_date.split('-');
  date = new Date(date[0], date[1] - 1, date[2]).toDateString();

  return (
    <>
      <Header title={`Most Recent ${data.name} Rover Photos`} icon={getIcon} />

      <Box className='Transition' style={{ height: showContent ? '40vh' : 0 }}>
        <Box className='CuriosityInfo'>
          <Typography
            fontFamily={'Patrick Hand'}
            fontSize={20}
            textAlign={'center'}
            color={'whitesmoke'}
            margin={'15px'}
            border={'1px solid #0366fc'}
            padding={'15px'}
          >
            Taken on: {date} <br />
            Sol Day: {data.max_sol}
          </Typography>
        </Box>

        <CuriosityRadioAndMedia latest={latest} cameras={cameras} />
      </Box>
    </>
  );
}

export default CuriosityLatest;
