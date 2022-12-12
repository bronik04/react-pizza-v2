import React, { useState } from 'react';

const Categories = () => {
  const [active, setActive] = useState('');

  const handleActive = value => {
    setActive(value);
  };
  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => handleActive('Все')}
          className={active === 'Все' ? 'active' : ''}
        >
          Все
        </li>
        <li
          onClick={() => handleActive('Мясные')}
          className={active === 'Мясные' ? 'active' : ''}
        >
          Мясные
        </li>
        <li
          onClick={() => handleActive('Вегетарианская')}
          className={active === 'Вегетарианская' ? 'active' : ''}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => handleActive('Гриль')}
          className={active === 'Гриль' ? 'active' : ''}
        >
          Гриль
        </li>
        <li
          onClick={() => handleActive('Острые')}
          className={active === 'Острые' ? 'active' : ''}
        >
          Острые
        </li>
        <li
          onClick={() => handleActive('Закрытые')}
          className={active === 'Закрытые' ? 'active' : ''}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
};

export default Categories;
