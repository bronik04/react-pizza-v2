import React, {FC} from 'react';
import {categories, CategoriesProps} from '../../utils/consts';

const Categories: FC<CategoriesProps> = ({category, onClick}) => {

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
