import React, {FC} from 'react';
import styles from './not-found-block.module.scss';

const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h2>🙁</h2>
      <br />
      <h1>Ничего не найдено</h1>
    </div>
  );
};

export default NotFoundBlock;
