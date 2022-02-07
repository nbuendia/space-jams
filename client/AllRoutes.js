import React from "react";
import {Routes, Route} from 'react-router-dom';

//ROUTES
import Home from './Components/Home';

function AllRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </>
    )
}

export default AllRoutes;