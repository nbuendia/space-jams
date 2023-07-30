import React, { useState } from 'react';

//MUI
import { IconButton } from '@mui/material';
//MUI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function useGetIcon() {
  const [showContent, setShowContent] = useState(false);

  function handleDescription() {
    setShowContent(!showContent);
  }

  const getIcon = (
    <IconButton onClick={handleDescription} style={{ width: '100%' }}>
      {showContent ? (
        <KeyboardArrowUpIcon style={{ color: 'whitesmoke' }} />
      ) : (
        <KeyboardArrowDownIcon style={{ color: 'whitesmoke' }} />
      )}
    </IconButton>
  );

  return [getIcon, showContent];
}
