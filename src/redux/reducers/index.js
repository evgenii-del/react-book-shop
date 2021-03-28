import { combineReducers } from 'redux';

import catalogReducer from './catalog/catalog';
import userReducer from './user/user';
import cartReducer from './cart/cart';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
