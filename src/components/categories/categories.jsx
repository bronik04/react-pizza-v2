import React, { useState } from 'react';
import { categories } from '../../utils/consts';

const Categories = ({category, onClick}) => {
  // const [active, setActive] = useState('Все');

  return (
    <div className='categories'>
      <ul>
        {categories.map((value, index) => (
          <li
            key={value}
            onClick={() => onClick(index)}
            className={category === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
