import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS = 'books/getBooks/';
const ADD = 'books/addBook/';
const REMOVE = 'books/removeBook/';

const initialState = {

};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const key = 'EF3HU7mC3UuQNf2vAE1O';

export const getBooks = createAsyncThunk(
  BOOKS,
  async () => {
    try {
      const response = await axios.get(`${baseUrl}${key}/books/`);

      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const addBook = createAsyncThunk(
  ADD,
  async (book) => {
    try {
      await axios.post(`${baseUrl}${key}/books`, book);
      const response = await axios.get(`${baseUrl}${key}/books/`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const removeBook = createAsyncThunk(
  REMOVE,
  async (id) => {
    try {
      await axios.delete(`${baseUrl}${key}/books/${id}`);
      const response = await axios.get(`${baseUrl}${key}/books/`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => (action.payload));

    builder.addCase(addBook.fulfilled, (state, action) => {
      const {
        title, author, category,
      } = action.meta.arg;

      const newData = {
        [action.meta.arg.item_id]: [{
          title,
          author,
          category,
        }],
      };
      return { ...action.payload, ...newData };
    });

    builder.addCase(removeBook.fulfilled, (state, action) => action.payload || {});

    builder.addDefaultCase(() => {});
  },
});

const bookReduce = booksSlice.reducer;

export default bookReduce;
