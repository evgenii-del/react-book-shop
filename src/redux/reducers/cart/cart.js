import {
  ADD_BOOK_TO_CART,
  CLEAR_CART,
  DECREASE_COUNT_OF_BOOK,
  INCREASE_COUNT_OF_BOOK,
  REMOVE_BOOK_FROM_CART,
} from '../../actions/cart/cart';

const getTotalCount = (arr) => arr.reduce((sum, book) => book.totalCount + sum, 0);

const getTotalPrice = (arr) => arr.reduce((sum, book) => book.totalPrice + sum, 0);

const initialState = {
  books: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return {
        books: [...state.books, action.payload],
        totalCount: getTotalCount([...state.books, action.payload]),
        totalPrice: getTotalPrice([...state.books, action.payload]),
      };
    case REMOVE_BOOK_FROM_CART: {
      const newBooksArr = [...state.books].filter((item) => item.book.id !== action.payload);
      return {
        books: newBooksArr,
        totalCount: getTotalCount(newBooksArr),
        totalPrice: getTotalPrice(newBooksArr),
      };
    }
    case INCREASE_COUNT_OF_BOOK: {
      const bookItem = [...state.books].find((item) => item.book.id === action.payload);
      const index = [...state.books].indexOf(bookItem);

      const newBookItem = {
        book: bookItem.book,
        totalCount: bookItem.totalCount + 1,
        totalPrice: bookItem.totalPrice + bookItem.book.price,
      };

      const changedBookArr = [...state.books];
      changedBookArr[index] = newBookItem;

      return {
        books: changedBookArr,
        totalCount: getTotalCount(changedBookArr),
        totalPrice: getTotalPrice(changedBookArr),
      };
    }
    case DECREASE_COUNT_OF_BOOK: {
      const bookItem = [...state.books].find((item) => item.book.id === action.payload);
      const index = [...state.books].indexOf(bookItem);

      const newBookItem = {
        book: bookItem.book,
        totalCount: bookItem.totalCount - 1,
        totalPrice: bookItem.totalPrice - bookItem.book.price,
      };

      const changedBookArr = [...state.books];
      changedBookArr[index] = newBookItem;

      return {
        books: changedBookArr,
        totalCount: getTotalCount(changedBookArr),
        totalPrice: getTotalPrice(changedBookArr),
      };
    }
    case CLEAR_CART:
      return {
        books: [],
        totalCount: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
