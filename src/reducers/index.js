import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
