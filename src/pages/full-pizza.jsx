import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://6396f81d77359127a0282b32.mockapi.io/items/${id}`,
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
        navigate('/')
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={'container'}>
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} Руб.</h4>
    </div>
  );
};

export default FullPizza;
