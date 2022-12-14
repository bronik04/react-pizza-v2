import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

import Categories from '../components/categories/categories';
import Sort from '../components/sort/sort';
import PizzaBlock from '../components/pizza-block/pizza-block';
import { skeletons, sortList } from '../utils/consts';

import { useDispatch, useSelector } from 'react-redux';
import {
  setCategory,
  setFilter,
} from '../services/slices/filter-slice';
import { useNavigate } from 'react-router-dom';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort } = useSelector(state => state.filter);

  const pizzas = items.map(pizza => (
    <PizzaBlock key={pizza.title} {...pizza} />
  ));

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `search=${searchValue}` : '';
  const sortBy = `&sortBy=${sort.sortProperty}&order=desc`;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(
        item => item.sortProperty === params.sortProperty,
      );

      dispatch(
        setFilter({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
      });
      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [category, searchValue, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const gerItems = async () => {
      const res = await axios.get(
        `https://6396f81d77359127a0282b32.mockapi.io/items?${category}${search}${sortBy}`,
      );
      setItems(res.data);
      setIsLoading(false);
    };

    if (!isSearch.current) {
      gerItems();
    }

    isSearch.current = false;
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
