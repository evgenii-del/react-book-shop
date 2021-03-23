import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logoutPng from '../assets/images/logout.png';
import cartPng from '../assets/images/cart.png';
import { logout } from '../redux/actions/user';

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <Link to="/catalog" className="header__logo">
        Book Shop
      </Link>
      <div className="header__info">
        <form className="header__form">
          <input
            className="header__form-input"
            type="text"
            value={search}
            onChange={handleChangeSearch}
          />
          <button className="header__form-btn" type="button">
            Search
          </button>
        </form>
        <div className="header__cart" onClick={handleLogout} aria-hidden>
          <img className="header__cart-image" src={logoutPng} alt="logout" />
          <span className="header__cart-label">Logout</span>
        </div>
        <Link to="/cart" className="header__exit">
          <img className="header__exit-image" src={cartPng} alt="cart" />
          <span className="header__exit-label">Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
