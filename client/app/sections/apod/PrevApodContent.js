import React from 'react';

//MUI
import { CardContent, Divider, Typography } from '@mui/material';

function PrevApodContent(props) {
  const { currPhoto, titles, dates, descriptions } = props;

  let currTitle = titles[currPhoto];
  let currDate = dates[currPhoto].split('-');
  currDate = new Date(currDate[0], currDate[1] - 1, currDate[2]).toDateString();
  let currDescription = descriptions[currPhoto];

  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        fontFamily={'Patrick Hand'}
        fontSize={15}
        textAlign={'center'}
        color={'whitesmoke'}
      >
        {currTitle} <br />
        {currDate}
      </Typography>
      <Divider style={{ borderColor: 'whitesmoke', margin: '0.5rem 0' }} />

      <Typography
        fontFamily={'Patrick Hand'}
        fontSize={15}
        textAlign={'center'}
        color={'whitesmoke'}
      >
        {currDescription}
      </Typography>
    </CardContent>
  );
}

export default PrevApodContent;
