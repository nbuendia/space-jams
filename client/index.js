import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//MUI
import { createTheme, ThemeProvider } from '@mui/material';

//TO IMPORT STYLES ON DEPLOYED BUILD
import '../public/style.css';
import 'react-calendar/dist/Calendar.css';

//COMPONENTS
import App from './App';

//SET TYPOGRAPHY FONT TO 'Shadows Into Light'
const theme = createTheme({
  typography: {
    fontFamily: 'Shadows Into Light',
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: 'whitesmoke',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'whitesmoke',
          '& > fieldset': {
            borderColor: 'whitesmoke',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: 'whitesmoke',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(8px)',
          color: 'whitesmoke',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          height: '100px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'red',
        },
      },
    },
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
