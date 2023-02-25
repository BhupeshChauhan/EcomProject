import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Authentication from './routes/authentication/authentication';
import Home from './routes/home/home';
import Shop from './routes/Shop/Shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
