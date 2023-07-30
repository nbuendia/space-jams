import React from 'react';
import { GridLoader } from 'react-spinners';

//COMPONENTS
import Title from './Title';
import Earth from './Earth';

//HOOKS
import { useFetchData } from './hooks/useFetchData';

//MUI
import { Box, Container, Grid } from '@mui/material';

function EPIC() {
  const [isLoading, data] = useFetchData();

  if (isLoading)
    return (
      <Box className='Loader'>
        <GridLoader loading={isLoading} color='white' size={25} />
      </Box>
    );

  return (
    <Container>
      <Title data={data} />
      <Grid container spacing={1} justifyContent={'center'}>
        <Earth data={data} />
      </Grid>
    </Container>
  );
}

export default EPIC;
