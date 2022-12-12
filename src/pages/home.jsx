import React, { useEffect, useState } from 'react';
import Categories from '../components/categories/categories';
import Sort from '../components/sort/sort';
import { Skeleton } from '../components/pizza-block/skeleton';
import PizzaBlock from '../components/pizza-block/pizza-block';
import axios from 'axios';

const Home = () => {
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

    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map(pizza => <PizzaBlock key={pizza.title} {...pizza} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
