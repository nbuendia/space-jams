import React from 'react';

//MUI
import { Card, CardMedia, Grid } from '@mui/material';

function CuriosityDateMedia(props) {
  const { data, value, date } = props;

  let camValue = data.find((camData) => camData[0] === value);
  camValue = camValue && camValue[1];

  return (
    <>
      {camValue &&
        camValue.map((img) => (
          <Grid item key={img.id} xs={12} sm={6} md={4}>
            <Card elevation={0} style={{ backgroundColor: 'transparent' }}>
              <CardMedia
                component='img'
                image={img.img_src}
                alt={`Curiosity Photos from ${date.toLocaleDateString()}`}
              />
            </Card>
          </Grid>
        ))}
    </>
  );
}

export default CuriosityDateMedia;
