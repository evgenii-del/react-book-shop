import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { CartItem, Header } from '../components';
import emptyPng from '../assets/images/empty-cart.png';
import { clearCart } from '../store/actions';

const Cart = () => {
  const { user, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePurchase = () => {
    const books = JSON.stringify(cart.books);
    const headers = { Authorization: `Bearer ${user.token}` };
    axios.post('https://js-band-store-api.glitch.me/purchase', { books }, { headers })
      .then((response) => {
        console.log(response);
        dispatch(clearCart());
      })
      .catch((error) => console.log(error));
  };

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Header />
      <div className="cart">
        <h2 className="cart__title">Cart</h2>
        {cart.totalCount ? cart.books.map((item) => (
          <div className="cart__content">
            <div className="cart__list">
              <CartItem item={item} />
            </div>
            <div className="cart__bottom">
              <p>
                Total price:
                {cart.totalPrice}
              </p>
              <button type="button" onClick={handlePurchase}>Purchase</button>
            </div>
          </div>
        )) : (
          <div className="cart__empty">
            <img className="cart__empty-image" src={emptyPng} alt="empty cart" />
            <p className="cart__empty-text">Cart empty...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
