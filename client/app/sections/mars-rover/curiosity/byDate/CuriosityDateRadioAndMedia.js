import React, { useEffect, useState } from 'react';

//COMPONENTS
import CuriosityDateMedia from './CuriosityDateMedia';

//MUI
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from '@mui/material';

function CuriosityDateRadioAndMedia(props) {
  const { photos, isLoading, date } = props;
  const [value, setValue] = useState(null);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const camData = {
    FHAZ: null,
    RHAZ: null,
    MAST: null,
    CHEMCAM: null,
    MAHLI: null,
    NAVCAM: null,
  };

  for (const cam in camData)
    camData[cam] = photos.filter((item) => item.camera.name === cam);

  for (const cam in camData) if (!camData[cam].length) delete camData[cam];

  const camDataArr = Object.entries(camData);
  const camNames = camDataArr.map((elem) => elem[0]);

  useEffect(() => {
    setValue(camNames[0]);
  }, [photos]);

  // TOOLTIP - FULL CAMERA NAMES
  function fullName(name) {
    switch (name) {
      case 'FHAZ':
        name = 'Front Hazard Avoidance Camera';
        break;
      case 'RHAZ':
        name = 'Rear Hazard Avoidance Camera';
        break;
      case 'MAST':
        name = 'Mast Camera';
        break;
      case 'CHEMCAM':
        name = 'Chemistry and Camera Complex';
        break;
      case 'MAHLI':
        name = 'Mars Hand Lens Imager';
        break;
      case 'MARDI':
        name = 'Mars Descent Imager';
        break;
      case 'NAVCAM':
        name = 'Navigation Camera';
        break;
      default:
        '';
    }
    return name;
  }

  return (
    <>
      <FormControl
        fullWidth
        style={{ alignItems: 'center', marginBottom: '25px' }}
      >
        <RadioGroup row value={value} onChange={handleChange}>
          {camNames.map((camera) => (
            <Tooltip
              key={camera}
              placement='bottom'
              title={
                <Typography fontFamily={'Patrick Hand'}>
                  {fullName(camera)}
                </Typography>
              }
            >
              <FormControlLabel
                value={camera}
                label={
                  <Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>
                    {camera}
                  </Typography>
                }
                labelPlacement='top'
                control={<Radio style={{ color: 'whitesmoke' }} />}
              />
            </Tooltip>
          ))}
        </RadioGroup>
      </FormControl>

      <Grid
        container
        spacing={1}
        justifyContent={'center'}
        style={{ marginBottom: '15px' }}
      >
        <CuriosityDateMedia data={camDataArr} value={value} date={date} />
      </Grid>
    </>
  );
}

export default CuriosityDateRadioAndMedia;
