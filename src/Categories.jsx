import React from 'react';
import { useStore } from 'react-redux';
import { statusReducer } from './redux/categories/categoriesSlice';

function Categories() {
  const store = useStore();
  const status = statusReducer(store.getState().categories);
  return (
    <div>
      <h2>Categories</h2>
      <h3>{status}</h3>
    </div>
  );
}

export default Categories;
