import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartItem, Header } from '../components';
import emptyPng from '../assets/images/empty-cart.png';

const Cart = () => {
  const { user, cart } = useSelector((state) => state);

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Header />
      <div className="cart">
        <h2 className="cart__title">Cart</h2>
        <div className="cart__content">
          <div className="cart__list">
            {cart.totalCount
              ? cart.books.map((item) => <CartItem item={item} />) : (
                <div className="cart__empty">
                  <img className="cart__empty-image" src={emptyPng} alt="empty cart" />
                  <p className="cart__empty-text">Cart empty...</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
