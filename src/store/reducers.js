import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_STARTED, GET_BOOKS_SUCCESS,
  SET_USER, LOGOUT, ADD_BOOK_TO_CART, CLEAR_CART,
} from './actions';

const getTotalCount = (arr) => arr.reduce((sum, book) => book.totalCount + sum, 0);

const getTotalPrice = (arr) => arr.reduce((sum, book) => book.totalPrice + sum, 0);

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
    case CLEAR_CART:
      return {
        ...state,
        cart: {},
      };
    case ADD_BOOK_TO_CART: {
      const newCart = {
        books: [...state.cart.books, action.payload],
        totalCount: getTotalCount([...state.cart.books, action.payload]),
        totalPrice: getTotalPrice([...state.cart.books, action.payload]),
      };
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
