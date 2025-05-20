import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import searchReducer from '../features/search/searchSlice';
export const store = configureStore({
    reducer: {
        todos: todoReducer, // Ensure the reducer is properly structured
        search: searchReducer
    },
});