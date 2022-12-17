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
export const sortList: SortItem[] = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'цене', sortProperty: 'price' },
  { name: 'алфавиту', sortProperty: 'title' },
];
export const skeletons = [...new Array(6)].map((_, index) => (
  <Skeleton key={index} />
));

export type SortItem = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title';
};

export type CategoriesProps = {
  category: number;
  onClick: (index: number) => void;
};

export type CartItemProps = {
  id: string,
  title: string,
  type: string,
  sizes: number,
  price: number,
  count: number,
  imageUrl: string,
}

export type PizzaBlockProps = {
  id: string,
  title: string,
  types: number[],
  sizes: number[],
  price: number,
  count: number,
  imageUrl: string,
}
