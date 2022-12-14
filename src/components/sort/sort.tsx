import React, { FC, useEffect, useRef, useState } from 'react';
import { SortItem, sortList } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSort,
  setSort,
} from '../../services/slices/filter-slice';

const Sort: FC = React.memo(() => {
  const [opened, setOpened] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sortRef.current && !event.path.includes(sortRef.current)) {
        setOpened(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpened(false);
  };

  return (
    <div ref={sortRef} className='sort'>
      <div onClick={() => setOpened(!opened)} className='sort__label'>
        <svg
          style={opened ? { transform: 'rotate(180deg)' } : {}}
          width='10'
          height='6'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sort.name}</span>
      </div>
      {opened && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((sortItem) => (
              <li
                key={sortItem.name}
                className={
                  sort?.sortProperty === sortItem.sortProperty
                    ? 'active'
                    : ''
                }
                onClick={() => handleSort(sortItem)}
              >
                {sortItem.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
