import { configureStore } from '@reduxjs/toolkit';
import searcherReducer from './slices/SearcherSlice';
import paginatorReducer from './slices/PaginatorSlice';

export default configureStore({
  reducer: {
    searcher: searcherReducer,
    paginator: paginatorReducer
  }
})