import axios from 'axios';

export const SET_USER = 'SET_USER';
export const GET_BOOKS_STARTED = 'GET_BOOKS_STARTED';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';
export const LOGOUT = 'LOGOUT';
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const addUser = (userName) => (dispatch) => {
  axios.post('https://js-band-store-api.glitch.me/signin', { username: userName })
    .then((response) => {
      dispatch(setUser(response.data));
    })
    .catch((error) => console.log(error));
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

export const logout = () => ({
  type: LOGOUT,
});

export const addBookToCart = (data) => ({
  type: ADD_BOOK_TO_CART,
  payload: data,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
