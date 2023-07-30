import React from 'react';

//COMPONENTS
import CuriosityDateSelector from './CuriosityDateSelector';
import CuriosityDateRadioAndMedia from './CuriosityDateRadioAndMedia';
import { Header } from '../../../../../components/Header';

//HOOKS
import { useFetchData } from './hooks/useFetchdata';
import { useGetIcon } from '../../hooks/useGetIcon';

//MUI
import { Box, Typography } from '@mui/material';
import { PuffLoader } from 'react-spinners';

function CuriosityByDate() {
  const [data, isLoading, date, getDate] = useFetchData();
  const [getIcon, showContent] = useGetIcon();

  return (
    <>
      <Header title='Search Photos By Date' icon={getIcon} />

      <Box
        id='top3'
        className='Transition'
        style={{
          height: showContent ? '60vh' : 0,
        }}
      >
        <CuriosityDateSelector getDate={getDate} />

        {isLoading && date && (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}
          >
            <PuffLoader loading={isLoading} color='white' />
          </Box>
        )}

        {!isLoading && (
          <Typography
            fontFamily={'Patrick Hand'}
            fontSize={20}
            textAlign={'center'}
            color={'whitesmoke'}
            margin={'15px'}
            // border={'1px solid #0366fc'}
            padding={'15px'}
          >
            {data && date ? (
              <>
                Taken on: {date.toDateString()} <br />
                Sol Day: {data[0].sol}
              </>
            ) : !data && date ? (
              <>
                No Photos for {date.toLocaleDateString()}. <br />
                Please Choose Another Date.
              </>
            ) : null}
          </Typography>
        )}

        {data && !isLoading && (
          <>
            <CuriosityDateRadioAndMedia
              photos={data}
              isLoading={isLoading}
              date={date}
            />
          </>
        )}
      </Box>
    </>
  );
}

export default CuriosityByDate;
