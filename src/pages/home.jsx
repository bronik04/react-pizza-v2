import React, { useEffect, useState } from 'react';
import Categories from '../components/categories/categories';
import Sort from '../components/sort/sort';
import PizzaBlock from '../components/pizza-block/pizza-block';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../services/slices/filter-slice';
import {skeletons} from "../utils/consts";

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector(state => state.filter);

  const pizzas = items.map(pizza => (
    <PizzaBlock key={pizza.title} {...pizza} />
  ));

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `search=${searchValue}` : '';
  const sortBy = `&sortBy=${sort.sortProperty}&order=desc`;



  useEffect(() => {
    setIsLoading(true);
    const gerItems = async () => {
      const res = await axios.get(
        `https://6396f81d77359127a0282b32.mockapi.io/items?${category}${search}${sortBy}`,
      );
      setItems(res.data);
      setIsLoading(false);
    };

    gerItems();

    window.scrollTo(0, 0);
  }, [category, searchValue, sortBy]);

  const handleChangeCategory = categoryId => {
    dispatch(setCategory(categoryId));
  };

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories
            category={categoryId}
            onClick={handleChangeCategory}
          />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isLoading ? skeletons : pizzas}
        </div>
      </div>
    </div>
  );
};

export default Home;
