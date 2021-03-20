import React, { useState } from 'react';

import logoutPng from '../assets/images/logout.png';
import cartPng from '../assets/images/cart.png';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <header className="header">
      <a href="" className="header__logo">
        Book Shop
      </a>
      <div className="header__info">
        <form className="header__form">
          <input className="header__form-input" type="text" value={search} onChange={handleChangeSearch} />
          <button className="header__form-btn" type="button">Search</button>
        </form>
        <a href="" className="header__cart">
          <img className="header__cart-image" src={logoutPng} alt="logout" />
          <span className="header__cart-label">Logout</span>
        </a>
        <a href="" className="header__exit">
          <img className="header__exit-image" src={cartPng} alt="cart" />
          <span className="header__exit-label">Cart</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
