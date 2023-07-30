import React from 'react';

//MUI
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';

function Perseverance(props) {
  const {
    data: { data, latest, cameras },
  } = props;

  const launchDate = data.launch_date.split('-');
  const landingDate = data.landing_date.split('-');
  const formattedLaunchDate = new Date(
    launchDate[0],
    launchDate[1],
    launchDate[2]
  ).toDateString();
  const formattedLandingDate = new Date(
    landingDate[0],
    landingDate[1],
    landingDate[2]
  ).toDateString();

  return (
    <Box style={{ width: '100%' }}>
      <Typography fontFamily={'Shizuru'} fontSize={35} textAlign={'center'}>
        {data.name}
      </Typography>
      <Divider style={{ borderColor: 'whitesmoke', margin: '0.5rem' }} />
      <Card style={{ backgroundColor: 'rgb(36, 36, 36)' }}>
        <CardContent>
          <Typography
            fontFamily={'Patrick Hand'}
            textAlign={'center'}
            color={'white'}
          >
            Launch Date: {formattedLaunchDate} <br />
            Landing Date: {formattedLandingDate} <br />
            Status: {data.status[0].toUpperCase() + data.status.slice(1)}
          </Typography>
        </CardContent>

        <Button variant='outlined' style={{ marginBottom: '20px' }}>
          View Photos
        </Button>
      </Card>
    </Box>
  );
}

export default Perseverance;
