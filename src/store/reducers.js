import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_STARTED, GET_BOOKS_SUCCESS,
  SET_USER, LOGOUT,
} from './actions';

const shopReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_BOOKS_STARTED:
      return {
        ...state,
        books: {
          ...state.books,
          isLoading: true,
        },
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        books: {
          data: [],
          isLoading: false,
          error: action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default shopReducer;
