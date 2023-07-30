import React, { useState } from 'react';

import { dateValidator } from './utils/dateValidator';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

function CuriosityDateSelector(props) {
  const { getDate } = props;

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const [monthHelperText, setMonthHelperText] = useState(null);
  const [dayHelperText, setDayHelperText] = useState(null);
  const [yearHelperText, setYearHelperText] = useState(null);

  const { monthValidator, dayValidator, yearValidator, isValid } =
    dateValidator(month, day, year);

  const handleOnClick = () => {
    setMonthHelperText(monthValidator);
    setDayHelperText(dayValidator);
    setYearHelperText(yearValidator);

    const date = new Date(year, month - 1, day);
    if (isValid) getDate(date);
  };

  return (
    <>
      <Box className='SelectContainer'>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel>Month</InputLabel>
          <Select
            value={month}
            label='Month'
            onChange={(event) => setMonth(event.target.value)}
            sx={{ backgroundColor: 'transparent' }}
            MenuProps={{ disableScrollLock: true }}
          >
            <MenuItem value='1'>January</MenuItem>
            <MenuItem value='2'>February</MenuItem>
            <MenuItem value='3'>March</MenuItem>
            <MenuItem value='4'>April</MenuItem>
            <MenuItem value='5'>May</MenuItem>
            <MenuItem value='6'>June</MenuItem>
            <MenuItem value='7'>July</MenuItem>
            <MenuItem value='8'>August</MenuItem>
            <MenuItem value='9'>September</MenuItem>
            <MenuItem value='10'>October</MenuItem>
            <MenuItem value='11'>November</MenuItem>
            <MenuItem value='12'>December</MenuItem>
          </Select>
          <FormHelperText>{monthHelperText}</FormHelperText>
        </FormControl>
        <TextField
          id='outlined-number'
          label='Day'
          type='number'
          helperText={dayHelperText}
          onChange={(event) => setDay(event.target.value)}
          sx={{ m: 1, minWidth: 150 }}
        />
        <TextField
          id='outlined-number'
          label='Year'
          type='number'
          helperText={yearHelperText}
          onChange={(event) => setYear(event.target.value)}
          sx={{ m: 1, minWidth: 150 }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          onClick={handleOnClick}
          sx={{ color: 'whitesmoke', borderColor: 'whitesmoke' }}
        >
          Search
        </Button>
      </Box>
    </>
  );
}

export default CuriosityDateSelector;
