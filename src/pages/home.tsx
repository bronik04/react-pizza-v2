import React, { FC, useCallback, useEffect } from 'react';
import qs from 'qs';

import Categories from '../components/categories/categories';
import Sort from '../components/sort/sort';
import PizzaBlock from '../components/pizza-block/pizza-block';
import { skeletons, sortList } from '../utils/consts';

import { useSelector } from 'react-redux';
import {
  selectFilter,
  setCategory,
  setFilter,
} from '../services/slices/filter-slice';
import { useNavigate } from 'react-router-dom';
import {
  fetchPizzas,
  selectPizza,
} from '../services/slices/pizza-slice';
import { useAppDispatch } from '../services/store';

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);
  const { categoryId, sort, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);

  const pizzas = items.map((pizza: any) => (
    <PizzaBlock key={pizza.title} {...pizza} />
  ));

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `search=${searchValue}` : '';
  const sortBy = `&sortBy=${sort.sortProperty}&order=desc`;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (item) => item.sortProperty === params.sortProperty,
      );

      dispatch(
        setFilter({
          ...params,
          // @ts-ignore
          sort,
        }),
      );
      // isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    // if (isMounted) {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
    });
    navigate(`?${queryString}`);
    // }

    // isMounted.current = true;
  }, [category, searchValue, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const gerItems = async () => {
      dispatch(
        fetchPizzas({
          category,
          search,
          sortBy,
        }),
      );
    };

    // if (!isSearch.current) {
    gerItems();
    // }

    // isSearch.current = false;
  }, [category, searchValue, sortBy]);

  const handleChangeCategory = useCallback((categoryId: number) => {
    dispatch(setCategory(categoryId));
  }, []);

  return (
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
        {status === 'loading' ? skeletons : pizzas}
      </div>
    </div>
  );
};

export default Home;
