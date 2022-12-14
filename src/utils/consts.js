import { Skeleton } from '../components/pizza-block/skeleton';
import React from 'react';
export const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
export const typesOfDough = ['тонкое', 'традиционное'];
export const sortList = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'цене', sortProperty: 'price' },
  { name: 'алфавиту', sortProperty: 'title' },
];
export const skeletons = [...new Array(6)].map((_, index) => (
  <Skeleton key={index} />
));
