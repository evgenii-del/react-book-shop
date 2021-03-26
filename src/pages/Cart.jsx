import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { CartItem, Header } from '../components';
import { clearCart } from '../redux/actions/cart';
import CartModal from '../components/CartModal';
import emptyPng from '../assets/images/empty-cart.png';

const Cart = () => {
  const { books, totalCount, totalPrice } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCloseModal = () => {
    setIsPopupOpen(false);
    setIsOverlayOpen(false);
    handleClearCart();
  };

  const handlePurchase = () => {
    const booksArr = JSON.stringify(books);
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .post('https://js-band-store-api.glitch.me/purchase', { books: booksArr }, { headers })
      .then(() => {
        setIsPopupOpen(true);
        setIsOverlayOpen(true);
      })
      .catch((error) => console.log(`Technical difficulties: ${error.message}`));
  };

  return (
    <div className="container">
      <Header />
      <div className="cart">
        <h2 className="cart__title">Cart</h2>
        {totalCount ? (
          <div className="cart__content">
            <div className="cart__list">
              {books.map((item) => (
                <CartItem item={item} key={item.book.id} />
              ))}
            </div>
            <div className="cart__bottom">
              <p>{`Total: ${totalPrice.toFixed(2)}$`}</p>
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
      <div
        className={`overlay ${isOverlayOpen ? 'overlay_active' : undefined}`}
        onClick={handleCloseModal}
        aria-hidden
      />
    </div>
  );
};

export default Cart;
