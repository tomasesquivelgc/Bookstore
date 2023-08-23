import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const myAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lMSi2kI7vwxiICUE8RTk/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(myAPI);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books.');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(myAPI, book);
    return response.data;
  } catch (error) {
    throw Error('Failed to add book.');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId) => {
  try {
    await axios.delete(`${myAPI}/${itemId}`);
    return itemId;
  } catch (error) {
    throw Error('Failed to remove book.');
  }
});

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        const newBook = action.meta.arg;
        const bookProperties = {
          title: newBook.title,
          author: newBook.author,
          category: newBook.category,
        };
        state[newBook.itemId] = [bookProperties];
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const deletedBookId = action.payload;
        const ids = Object.keys(state);
        ids.forEach((bookId) => {
          if (bookId === deletedBookId.toString()) {
            delete state[bookId];
          }
        });
      });
  },
});

export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
