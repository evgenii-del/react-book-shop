import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_STARTED, GET_BOOKS_SUCCESS,
  SET_USER, LOGOUT, ADD_BOOK_TO_CART,
  CLEAR_CART, REMOVE_BOOK_FROM_CART,
  INCREASE_COUNT_OF_BOOK, DECREASE_COUNT_OF_BOOK,
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
    case REMOVE_BOOK_FROM_CART: {
      const newBooksArr = [...state.cart.books].filter((item) => item.book.id !== action.payload);
      const newCart = {
        books: newBooksArr,
        totalCount: getTotalCount(newBooksArr),
        totalPrice: getTotalPrice(newBooksArr),
      };
      return {
        ...state,
        cart: newCart,
      };
    }
    case INCREASE_COUNT_OF_BOOK: {
      const bookItem = [...state.cart.books].find((item) => item.book.id === action.payload);
      const index = [...state.cart.books].indexOf(bookItem);

      const newBookItem = {
        book: bookItem.book,
        totalCount: bookItem.totalCount + 1,
        totalPrice: bookItem.totalPrice + bookItem.book.price,
      };

      const changedBookArr = [...state.cart.books];
      changedBookArr[index] = newBookItem;

      return {
        ...state,
        cart: {
          books: changedBookArr,
          totalCount: getTotalCount(changedBookArr),
          totalPrice: getTotalPrice(changedBookArr),
        },
      };
    }
    case DECREASE_COUNT_OF_BOOK: {
      const bookItem = [...state.cart.books].find((item) => item.book.id === action.payload);
      const index = [...state.cart.books].indexOf(bookItem);

      const newBookItem = {
        book: bookItem.book,
        totalCount: bookItem.totalCount - 1,
        totalPrice: bookItem.totalPrice - bookItem.book.price,
      };

      const changedBookArr = [...state.cart.books];
      changedBookArr[index] = newBookItem;

      return {
        ...state,
        cart: {
          books: changedBookArr,
          totalCount: getTotalCount(changedBookArr),
          totalPrice: getTotalPrice(changedBookArr),
        },
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        cart: {
          books: [],
        },
      };
    default:
      return state;
  }
};

export default shopReducer;
