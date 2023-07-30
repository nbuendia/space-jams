import React, { useEffect, useState } from 'react';

//MUI
import { Box, IconButton } from '@mui/material';
//MUI ICONS
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function ScrollButton() {
  const [target, setTarget] = useState(null);

  //ADDS BEHAVIOR TO ARROW CLICK TO SCROLL BACK TO TOP SMOOTHLY RATHER THAN JUST SNAPPING BACK
  function handleClick() {
    target.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  //FUNCTION THAT ADDS & REMOVES HIDDEN CLASS TO ARROW CONTAINER
  function handleClassChange(event) {
    const window = event.target;
    const arrow = document.getElementById('arrow');

    if (window.scrollTop === 0) arrow.classList.add('hidden');
    else if (window.scrollTop > 0) arrow.classList.remove('hidden');
  }

  //ADDS AND REMOVES SCROLL EVENT LISTENER TO MAIN CONTAINER
  useEffect(() => {
    let target = document.getElementById('top');
    setTarget(target);

    if (target) target.addEventListener('scroll', handleClassChange);
    return () =>
      target ? target.removeEventListener('scroll', handleClassChange) : null;
  }, [target, handleClassChange]);

  return (
    <Box id='arrow' className='TopButtonContainer Hidden'>
      <IconButton className='Button' onClick={handleClick}>
        <KeyboardDoubleArrowUpIcon
          style={{ color: 'whitesmoke', fontSize: '45' }}
        />
      </IconButton>
    </Box>
  );
}

export default ScrollButton;
