import React, { useEffect, useState } from 'react';
import Categories from '../components/categories/categories';
import Sort from '../components/sort/sort';
import { Skeleton } from '../components/pizza-block/skeleton';
import PizzaBlock from '../components/pizza-block/pizza-block';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../services/slices/pizza-slice';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);

  // const dispatch = useDispatch();
  // const { items, loading } = useSelector(state => state.pizzas);

  // useEffect(() => {
  //   dispatch(fetchPizzas());
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    const gerItems = async () => {
      const res = await axios.get(
        `https://6396f81d77359127a0282b32.mockapi.io/items?${
          activeCategory > 0 ? `category=${activeCategory}` : ''
        }`,
      );
      setItems(res.data);
      setIsLoading(false);
    };

    gerItems();

    window.scrollTo(0, 0);
  }, [activeCategory]);

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories
            category={activeCategory}
            onClick={activeCategory =>
              setActiveCategory(activeCategory)
            }
          />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isLoading
            ? [...new Array(6)].map((_, index) => (
                <Skeleton key={index} />
              ))
            : items.map(pizza => (
                <PizzaBlock key={pizza.title} {...pizza} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
