import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//MUI
import { createTheme, ThemeProvider } from "@mui/material";

//TO IMPORT STYLES ON DEPLOYED BUILD
import '../public/style.css';

//COMPONENTS
import App from './App'

//SET TYPOGRAPHY FONT TO 'Shadows Into Light'
const theme = createTheme({
    typography: {
        fontFamily: 'Shadows Into Light'
    }
});

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>, document.getElementById('root')
);