import { configureStore } from '@reduxjs/toolkit';
import booksReducers from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducers,
  },
});

export default store;
