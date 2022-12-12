import React from 'react';
import styles from './not-found-block.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h2>🙁</h2>
      <br />
      <h1>Ничего не найдено</h1>
    </div>
  );
};

export default NotFoundBlock;
