import React, { useState } from 'react';
import { categories } from '../../utils/consts';

const Categories = () => {
  const [active, setActive] = useState('');
  const handleActive = value => {
    setActive(value);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map(value => (
          <li
            onClick={() => handleActive(value)}
            className={active === value ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
