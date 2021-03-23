import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addUser } from '../redux/actions/user';

const MIN_LENGTH = 4;
const MAX_LENGTH = 16;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState(true);

  const handleChangeLogin = ({ target }) => {
    const valueLength = target.value.length;
    const validLength = MIN_LENGTH < valueLength && valueLength < MAX_LENGTH;
    setLoginError(!validLength);
    setLogin(target.value);
  };

  const handleLogin = () => {
    dispatch(addUser(login));
    history.push('/catalog');
  };

  return (
    <div className="login">
      <img
        className="login__image"
        src="https://images.pexels.com/photos/4769487/pexels-photo-4769487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="img"
      />
      <h1 className="login__title">Login</h1>
      <form className="login__form">
        <label className="login__input-label" htmlFor="login">
          Name
        </label>
        <input
          className="login__input"
          type="text"
          placeholder="Enter your name"
          id="login"
          value={login}
          onChange={handleChangeLogin}
        />
        <button className="login__btn" type="button" disabled={loginError} onClick={handleLogin}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
