import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import shopReducer from './reducers';

const initialState = {
  user: {
    username: '',
    avatar: '',
    token: '',
  },
  books: {
    data: [],
    isLoading: false,
    error: null,
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
