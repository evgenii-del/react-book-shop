import axios from 'axios';

export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

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

export const logout = () => {
  localStorage.removeItem('user');
  return {
    type: LOGOUT,
  };
};
