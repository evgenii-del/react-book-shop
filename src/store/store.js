import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import shopReducer from './reducers';

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const initialState = {
  user,
  books: {
    data: [],
    isLoading: false,
    error: null,
  },
  cart: {
    books: [],
    totalCount: 0,
    totalPrice: 0,
  },
};

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  shopReducer,
  initialState,
  enhancer,
);

export default store;
