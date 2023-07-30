import React from 'react';
import { Divider, Typography } from '@mui/material';

export const Header = (props) => {
  const { title, font, size, icon } = props;

  return (
    <>
      <Divider style={{ borderColor: 'whitesmoke', margin: '0.5rem 0' }} />

      <Typography
        fontFamily={font ? font : 'Shizuru'}
        fontSize={size ? size : 30}
        textAlign={'center'}
        color={'whitesmoke'}
      >
        {title}
        {icon && icon}
      </Typography>

      <Divider style={{ borderColor: 'whitesmoke', margin: '0.5rem 0' }} />
    </>
  );
};
