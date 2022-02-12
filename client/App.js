import React from "react";
import {Routes, Route} from 'react-router-dom';

//COMPONENTS
import Layout from "./Components/Layout";

 function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} />
            </Routes>
        </>
    )
 }

 export default App;