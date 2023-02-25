import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from './contexts/user.context';
import MainLayout from './Layout/MainLayout';
import Authentication from './routes/authentication/authentication';
import Home from './routes/home/home';
import Shop from './routes/Shop/Shop';

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route
        path="auth"
        element={
          currentUser ? <Navigate to="/" replace /> : <Authentication />
        }
      />
      </Route>
    </Routes>
  );
}

export default App;
