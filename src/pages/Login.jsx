import React, { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState('');

  const handleChangeLogin = ({ target }) => {
    setLogin(target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(login);
  };

  return (
    <div className="login">
      <img className="login__image" src="https://images.pexels.com/photos/4769487/pexels-photo-4769487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img" />
      <h1 className="login__title">Login</h1>
      <form className="login__form" onSubmit={handleSubmitForm}>
        <label className="login__input-label" htmlFor="login">Name</label>
        <input className="login__input" type="text" placeholder="Enter your name" id="login" value={login} onChange={handleChangeLogin} />
        <button className="login__btn" type="button">Continue</button>
      </form>
    </div>
  );
};

export default Login;
