import React from 'react';
import { useSelector } from 'react-redux';

import closeSvg from '../../assets/images/close.svg';

const CartModal = ({ isPopupOpen, handleCloseModal }) => {
  const { books, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className={`cart-modal ${isPopupOpen ? 'cart-modal_active' : undefined}`}>
      <button className="cart-modal__btn" type="button" name="button" onClick={handleCloseModal}>
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
            {books.map((item) => (
              <tr key={item.book.id}>
                <td className="cart-modal__table-td">{item.book.title}</td>
                <td className="cart-modal__table-td">{item.totalCount}</td>
                <td className="cart-modal__table-td">{`${item.book.price}$`}</td>
                <td className="cart-modal__table-td">{`${item.totalPrice.toFixed(2)}$`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-modal__total-price">{`Total: ${totalPrice.toFixed(2)}$`}</div>
    </div>
  );
};

export default CartModal;
