import React, { useState } from 'react';

import { Card } from '../components';
import searchPng from '../assets/images/search.png';
import cartPng from '../assets/images/cart.png';
import userPng from '../assets/images/user.png';

const Catalog = () => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="catalog">
      <div className="header">
        <h1 className="header__logo">React Book Shop</h1>
        <div className="header__search">
          <input className="header__search-input" type="text" name="search" value={search} onChange={handleChangeSearch} />
          <img className="header__search-image" src={searchPng} alt="search" />
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav-select">
          <select className="select__inner">
            <option value="all">All</option>
            <option value="1">0 &lt; price &lt; 25</option>
            <option value="2">25 &lt; price &lt; 50</option>
            <option value="3">price &gt; 50</option>
          </select>
        </div>
      </div>
      <div className="catalog__header">
        <div className="catalog__header-user">
          <p className="catalog__header-user-name">user</p>
          <div className="catalog__header-user-image-container">
            <img className="catalog__header-user-image" src={userPng} alt="user" />
          </div>
        </div>
        <img className="catalog__header-cart" src={cartPng} alt="cart" />
        <button className="catalog__header-btn" type="button">log out</button>
      </div>
      <div className="catalog__list">
        {Array(12).fill(0).map(() => <Card />)}
      </div>
    </div>
  );
};

export default Catalog;
