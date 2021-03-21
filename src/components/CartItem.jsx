import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
  const { item } = props;

  return (
    <div className="main__cart-item">
      <Link to="/catalog/1" className="main__cart-link">
        <img
          className="main__cart-image"
          src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg"
          alt="image"
        />
      </Link>
      <div className="main__cart-info">
        <p>{item.book.title}</p>
        <span>
          {item.totalPrice}
          $
          x
          {item.totalCount}
          items
        </span>
        <button type="button" aria-label="remove from cart" />
      </div>
    </div>
  );
};

export default CartItem;
