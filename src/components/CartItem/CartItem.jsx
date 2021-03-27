import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import closeSvg from '../../assets/images/close.svg';
import addSvg from '../../assets/images/add.svg';
import minusSvg from '../../assets/images/minus.svg';
import {
  decreaseCountOfBook,
  increaseCountOfBook,
  removeBookFromCart,
} from '../../redux/actions/cart';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { book, totalCount, totalPrice } = item;

  const handleRemoveItem = () => {
    dispatch(removeBookFromCart(item.book.id));
  };

  const handleIncreaseBook = () => {
    dispatch(increaseCountOfBook(item.book.id));
  };

  const handleDecreaseBook = () => {
    dispatch(decreaseCountOfBook(item.book.id));
  };

  return (
    <div className="cart-item">
      <button className="cart-item__btn" type="button" name="button" onClick={handleRemoveItem}>
        <img src={closeSvg} alt="close" aria-label="remove item from cart" />
      </button>
      <Link to={`/catalog/${book.id}`} className="cart-item__link">
        <img className="cart-item__image" src={book.cover} alt="cart item" />
      </Link>
      <div className="cart-item__content">
        <p className="cart-item__title">{book.title}</p>
        <div className="cart-item__bottom">
          <div className="cart-item__quantity">
            <button
              className="cart-item__add-btn"
              type="button"
              name="button"
              disabled={book.count <= totalCount}
              onClick={handleIncreaseBook}
            >
              <img src={addSvg} alt="increase item in cart" />
            </button>
            <span className="cart-item__total-count">{totalCount}</span>
            <button
              className="cart-item__minus-btn"
              type="button"
              name="button"
              disabled={totalCount <= 1}
              onClick={handleDecreaseBook}
            >
              <img src={minusSvg} alt="decrease item in cart" />
            </button>
          </div>
          <span className="cart-item__total-price">{`${totalPrice.toFixed(2)}$`}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
