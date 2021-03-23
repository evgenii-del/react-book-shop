import { combineReducers } from 'redux'

import catalogReducer from './catalog';
import userReducer from './user';
import cartReducer from './cart';

const rootReducer = combineReducers({
    books: catalogReducer,
    user: userReducer,
    cart: cartReducer,
});

export default rootReducer;
