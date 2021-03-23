import axios from 'axios';

export const SET_USER = 'SET_USER';
export const GET_BOOKS_STARTED = 'GET_BOOKS_STARTED';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';
export const LOGOUT = 'LOGOUT';
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREASE_COUNT_OF_BOOK = 'INCREASE_COUNT_OF_BOOK';
export const DECREASE_COUNT_OF_BOOK = 'DECREASE_COUNT_OF_BOOK';

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const addUser = (userName) => (dispatch) => {
  axios.post('https://js-band-store-api.glitch.me/signin', { username: userName })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch(setUser(response.data));
    })
    .catch(() => {});
};

export const getBooksStarted = () => ({
  type: GET_BOOKS_STARTED,
});

export const getBooksSuccess = (data) => ({
  type: GET_BOOKS_SUCCESS,
  payload: data,
});

export const getBooksFailure = (error) => ({
  type: GET_BOOKS_FAILURE,
  payload: error,
});

export const getCalendarData = (token) => (dispatch) => {
  dispatch(getBooksStarted());
  axios.get('https://js-band-store-api.glitch.me/books', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => dispatch(getBooksSuccess(data)))
    .catch(({ message }) => dispatch(getBooksFailure(message)));
};

export const logout = () => {
  localStorage.removeItem('user');
  return {
    type: LOGOUT,
  };
};

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
