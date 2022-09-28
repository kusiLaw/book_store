import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesAction } from '../redux/categories/categories';
import styles from './categories.module.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(categoriesAction());
  };

  return (
    <div className={styles['categories-wrapper']}>
      <button className={styles['check-status']} onClick={checkStatus} type="button">Check status</button>
      <p className={styles.status}>{categories}</p>
    </div>
  );
};

export default Categories;
