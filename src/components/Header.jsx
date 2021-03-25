import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logoutPng from '../assets/images/logout.png';
import cartPng from '../assets/images/cart.png';
import { logout } from '../redux/actions/user';

const Header = () => {
  const { username, avatar } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <Link to="/catalog" className="header__logo">
        B<span className="header__logo-element">ook</span>S
        <span className="header__logo-element">hop</span>
      </Link>
      <div className="header__info">
        <div className="header__exit" onClick={handleLogout} aria-hidden>
          <img className="header__exit-image" src={logoutPng} alt="logout" />
          <span className="header__exit-label">Logout</span>
        </div>
        <Link to="/cart" className="header__cart">
          <img className="header__cart-image" src={cartPng} alt="cart" />
          <span className="header__cart-label">Cart</span>
        </Link>
        <div className="header__user">
          <img className="header__user-image" src={avatar} alt={`${username} avatar`} />
          <p className="header__user-name">{username}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
