import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReduce from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReduce,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['books/getAllBooks//fulfilled', 'books/removeBook//fulfilled', 'books/addBook/fulfilled'],
    },
  }),

});

export default store;
