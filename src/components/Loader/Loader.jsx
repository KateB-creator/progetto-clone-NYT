// src/components/Loader/Loader.jsx
import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p>Caricamento in corso...</p>
    </div>
  );
};

export default Loader;
