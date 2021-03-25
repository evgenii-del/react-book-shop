import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { CartItem, Header } from '../components';
import { clearCart } from '../redux/actions/cart';
import emptyPng from '../assets/images/empty-cart.png';
import CartModal from '../components/CartModal';

const Cart = (props) => {
  const { setIsOverlayOpen } = props;
  const { user, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCloseModal = () => {
    setIsPopupOpen(false);
    setIsOverlayOpen(false);
    dispatch(clearCart());
  };

  const handlePurchase = () => {
    const books = JSON.stringify(cart.books);
    const headers = { Authorization: `Bearer ${user.token}` };
    setIsPopupOpen(true);
    setIsOverlayOpen(true);
    axios
      .post('https://js-band-store-api.glitch.me/purchase', { books }, { headers })
      .then(() => {})
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
              {cart.books.map((item) => (
                <CartItem item={item} key={item.book.id} />
              ))}
            </div>
            <div className="cart__bottom">
              <p>{`Total: ${cart.totalPrice.toFixed(2)}$`}</p>
              <div className="cart__buttons">
                <button className="cart__btn" type="button" onClick={handleClearCart}>
                  Clear cart
                </button>
                <button className="cart__btn" type="button" onClick={handlePurchase}>
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <img className="cart__empty-image" src={emptyPng} alt="empty cart" />
            <p className="cart__empty-text">Cart empty...</p>
          </div>
        )}
        <CartModal isPopupOpen={isPopupOpen} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default Cart;
