import React from 'react';
import './scss/app.scss';
import Header from './components/header/header';
import Categories from './components/categories/categories';
import Sort from './components/sort/sort';
import PizzaBlock from './components/pizza-block/pizza-block';
import { pizzas } from './utils/consts';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
              {pizzas.map(pizza => (
                <PizzaBlock key={pizza.title} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
