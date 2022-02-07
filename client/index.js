import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//TO IMPORT STYLES ON DEPLOYED BUILD
import '../public/style.css';

//COMPONENTS
import App from './App'

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);