import React, { useState } from 'react';

//COMPONENTS
import PrevApodMedia from './PrevApodMedia';
import PrevApodContent from './PrevApodContent';
import { Header } from '../../../components/Header';

//MUI
import { Box, Card } from '@mui/material';

function PrevApod(props) {
  const { data } = props;
  const [currPhoto, setCurrPhoto] = useState(0);

  const [photoUrls, mediaTypes, titles, dates, descriptions] = [
    'url',
    'media_type',
    'title',
    'date',
    'explanation',
  ].map((key) => data.map((elem) => elem[key]));

  //REMOVES TODAYS ELEMENT THATS ALREADY BEING DISPLAYED
  [photoUrls, mediaTypes, titles, dates, descriptions].forEach((elem) =>
    elem.pop()
  );

  return (
    <>
      <Header title='THIS WEEKS FEATURED PHOTOS' size={20} />

      <Box sx={{ paddingBottom: '20px' }}>
        <Card
          elevation={0}
          className='PreviousApodCard'
          style={{
            backgroundColor: 'transparent',
            margin: 0,
            display: 'flex',
          }}
        >
          <PrevApodMedia
            currPhoto={currPhoto}
            setCurrPhoto={setCurrPhoto}
            photoUrls={photoUrls}
            mediaTypes={mediaTypes}
          />
          <PrevApodContent
            currPhoto={currPhoto}
            titles={titles}
            dates={dates}
            descriptions={descriptions}
          />
        </Card>
      </Box>
    </>
  );
}

export default PrevApod;
