import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import axios from 'axios';
import Header from './components/header/header';
import Categories from './components/categories/categories';
import Sort from './components/sort/sort';
import PizzaBlock from './components/pizza-block/pizza-block';
import { Skeleton } from './components/pizza-block/skeleton';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gerItems = async () => {
      const res = await axios.get(
        'https://6396f81d77359127a0282b32.mockapi.io/items',
      );
      setItems(res.data);
      setIsLoading(false);
    };
    gerItems();
  }, []);

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
              {isLoading
                ? [...new Array(6)].map((_, index) => (
                    <Skeleton key={index} />
                  ))
                : items.map(pizza => (
                    <PizzaBlock
                      key={pizza.title}
                      {...pizza}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
