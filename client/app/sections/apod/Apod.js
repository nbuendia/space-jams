import React from 'react';
import { RingLoader } from 'react-spinners';

//COMPONENTS
import ApodCardContent from './ApodCardContent';
import PrevApod from './PrevApod';
import { Header } from '../../../components/Header';

//HOOKS
import { useFetchData } from './hooks/useFetchData';

//MUI
import { Box, Card, CardMedia, Container } from '@mui/material';

function Apod() {
  const [loading, isLoading, data, prevImages] = useFetchData();

  if (loading)
    return (
      <Box className='Loader'>
        <RingLoader loading={isLoading} color='white' size={100} />
      </Box>
    );

  return (
    <Container>
      <Box>
        <Header title={data.title} />

        <Card style={{ backgroundColor: 'transparent' }} elevation={0}>
          <CardMedia
            component={data.media_type === 'image' ? 'img' : 'iframe'}
            image={data.url}
            alt='Astronomy Picture of The Day'
            allowFullScreen
            frameBorder={0}
          />

          <ApodCardContent data={data} />
        </Card>

        <PrevApod data={prevImages} />
      </Box>
    </Container>
  );
}

export default Apod;
