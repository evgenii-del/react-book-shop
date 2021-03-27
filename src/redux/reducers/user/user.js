import { LOGOUT, SET_USER } from '../../actions/user/user';

const initialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
