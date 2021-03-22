import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { CartItem, Header } from '../components';
import emptyPng from '../assets/images/empty-cart.png';
import { clearCart } from '../store/actions';

const Cart = () => {
  const { user, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handlePurchase = () => {
    const books = JSON.stringify(cart.books);
    const headers = { Authorization: `Bearer ${user.token}` };
    axios.post('https://js-band-store-api.glitch.me/purchase', { books }, { headers })
      .then(() => dispatch(clearCart()))
      .catch(() => {});
  };

  return (
    <div className="container">
      <Header />
      <div className="cart">
        <h2 className="cart__title">Cart</h2>
        {cart.totalCount ? (
          <div className="cart__content">
            <div className="cart__list">
              {cart.books.map((item) => <CartItem item={item} key={item.book.id} />)}
            </div>
            <div className="cart__bottom">
              <p>
                Total price:
                {cart.totalPrice}
              </p>
              <button className="cart__bottom-btn" type="button" onClick={handlePurchase}>Purchase</button>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <img className="cart__empty-image" src={emptyPng} alt="empty cart" />
            <p className="cart__empty-text">Cart empty...</p>
          </div>
        )}
        <div className={`cart-modal ${isPopupOpen ? 'cart-modal_active' : undefined}`}>
          <h3 className="cart-modal__title">You successfully placed an order!</h3>
          <div className="cart-modal__content">
            <p>content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
