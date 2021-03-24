import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { CartItem, Header } from '../components';
import { clearCart } from '../redux/actions/cart';
import emptyPng from '../assets/images/empty-cart.png';
import closeSvg from '../assets/images/close.svg';

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
        <div className={`cart-modal ${isPopupOpen ? 'cart-modal_active' : undefined}`}>
          <button
            className="cart-modal__btn"
            type="button"
            name="button"
            onClick={handleCloseModal}
          >
            <img src={closeSvg} alt="close" aria-label="remove item from cart" />
          </button>
          <h3 className="cart-modal__title">You successfully placed an order!</h3>
          <div className="cart-modal__table-wrapper">
            <table className="cart-modal__table">
              <thead>
                <tr>
                  <th className="cart-modal__table-th">Title</th>
                  <th className="cart-modal__table-th">Count</th>
                  <th className="cart-modal__table-th">Price</th>
                  <th className="cart-modal__table-th">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.books.map((item) => (
                  <tr key={item.book.id}>
                    <td className="cart-modal__table-td">{item.book.title}</td>
                    <td className="cart-modal__table-td">{item.totalCount}</td>
                    <td className="cart-modal__table-td">{item.book.price}</td>
                    <td className="cart-modal__table-td">{item.totalPrice.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-modal__total-price">{`Total: ${cart.totalPrice.toFixed(2)}$`}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
