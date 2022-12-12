import React, { useState } from 'react';
import { categories } from '../../utils/consts';

const Categories = () => {
  const [active, setActive] = useState('');

  return (
    <div className='categories'>
      <ul>
        {categories.map(value => (
          <li
            key={value}
            onClick={() => setActive(value)}
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
