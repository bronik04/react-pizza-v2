import React, { useState } from 'react';
import './scss/app.scss';
import Header from './components/header/header';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Routes>
          <Route
            path={'/'}
            element={<Home searchValue={searchValue} />}
          />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
