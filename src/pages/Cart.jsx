import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from '../components';

const Cart = () => {
  const { user } = useSelector((state) => state);
  if (!user.token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header />
      <div className="main">
        <h2 className="main__title">Cart</h2>
        <div className="main__cart">
          <div className="main__cart-list">
            <div className="main__cart-item">
              <Link to="/catalog/1" className="main__cart-link">
                <img
                  className="main__cart-image"
                  src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg"
                  alt="image"
                />
              </Link>
              <div className="main__cart-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span>15 $ x 1 item</span>
                <button type="button" aria-label="remove from cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
