import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addUser } from '../store/actions';

const MIN_LENGTH = 4;
const MAX_LENGTH = 16;

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState(true);

  const handleChangeLogin = ({ target }) => {
    const valueLength = target.value.length;
    const validLength = MIN_LENGTH < valueLength && valueLength < MAX_LENGTH;
    setLoginError(!validLength);
    setLogin(target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(addUser(login));
  };

  if (user.token) {
    return <Redirect to="/catalog" />;
  }

  return (
    <div className="login">
      <img className="login__image" src="https://images.pexels.com/photos/4769487/pexels-photo-4769487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img" />
      <h1 className="login__title">Login</h1>
      <form className="login__form" onSubmit={handleSubmitForm}>
        <label className="login__input-label" htmlFor="login">Name</label>
        <input className="login__input" type="text" placeholder="Enter your name" id="login" value={login} onChange={handleChangeLogin} />
        <button className="login__btn" type="submit" disabled={loginError}>Continue</button>
      </form>
    </div>
  );
};

export default Login;
