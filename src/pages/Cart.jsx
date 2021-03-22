import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartItem, Header } from '../components';

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
              ? cart.books.map((item) => <CartItem item={item} />) : <span>Empty cart</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
