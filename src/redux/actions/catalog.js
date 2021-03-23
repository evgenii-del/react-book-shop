import axios from 'axios';

export const GET_BOOKS_STARTED = 'GET_BOOKS_STARTED';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

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
  axios
    .get('https://js-band-store-api.glitch.me/books', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(getBooksSuccess(data)))
    .catch(({ message }) => dispatch(getBooksFailure(message)));
};
