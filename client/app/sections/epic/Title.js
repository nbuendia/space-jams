import React from 'react';

//COMPONENTS
import { Header } from '../../../components/Header';

//MUI
import { Divider, Typography } from '@mui/material';

function Title(props) {
  const { data } = props;

  //IMG CAPTIONS ARE ALL THE SAME. I EDITED THE CAPTION TO BE PLURAL TO INCLUDE ALL IMAGES
  const caption = `All images were ${data[0].caption
    .split(' ')
    .slice(3)
    .join(' ')} on `;

  //['YYYY', 'MM', 'DD']
  let date = data[0].date.split(' ')[0].split('-');

  //FORMATTED DATE TO DISPLAY FULL DAY, MONTH, DAY AND YEAR
  date = new Date(date[0], date[1] - 1, date[2]);
  const options = { dateStyle: 'full' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <>
      <Header
        title={'MOST RECENT IMAGES OF OUR LOVELY PLANET EARTH!'}
        size={25}
      />

      <Typography fontSize={20} textAlign={'center'} color={'whitesmoke'}>
        {caption}
      </Typography>

      <Typography
        fontSize={20}
        fontWeight={'bold'}
        textAlign={'center'}
        color={'whitesmoke'}
      >
        {formattedDate}
      </Typography>
      <Divider style={{ borderColor: 'whitesmoke', margin: '0.5rem 0' }} />
    </>
  );
}

export default Title;
