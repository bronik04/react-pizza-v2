import React from 'react';
import './scss/app.scss';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';
import FullPizza from './pages/full-pizza';
import MainLayout from './layouts/main-layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route path={''} element={<Home />} />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'pizza/:id'} element={<FullPizza />} />
          <Route path={'*'} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
