import React from 'react';
import { Routes, Route } from 'react-router-dom';

//COMPONENTS
import Layout from './app/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
