export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREASE_COUNT_OF_BOOK = 'INCREASE_COUNT_OF_BOOK';
export const DECREASE_COUNT_OF_BOOK = 'DECREASE_COUNT_OF_BOOK';

export const addBookToCart = (data) => ({
  type: ADD_BOOK_TO_CART,
  payload: data,
});

export const removeBookFromCart = (id) => ({
  type: REMOVE_BOOK_FROM_CART,
  payload: id,
});

export const increaseCountOfBook = (id) => ({
  type: INCREASE_COUNT_OF_BOOK,
  payload: id,
});

export const decreaseCountOfBook = (id) => ({
  type: DECREASE_COUNT_OF_BOOK,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
