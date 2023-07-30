import React, { useState } from 'react';

//MUI
import { IconButton } from '@mui/material';
//MUI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function useGetIcon() {
  const [showContent, setShowContent] = useState(false);

  function handleChange() {
    setShowContent(!showContent);
  }

  const getIcon = (
    <IconButton
      className='button'
      onClick={handleChange}
      style={{ marginLeft: '10px' }}
    >
      {showContent ? (
        <KeyboardArrowUpIcon style={{ color: 'whitesmoke', fontSize: 30 }} />
      ) : (
        <KeyboardArrowDownIcon style={{ color: 'whitesmoke', fontSize: 30 }} />
      )}
    </IconButton>
  );

  return [getIcon, showContent];
}
