import React from 'react';
import './scss/app.scss';
import Header from './components/header/header';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
