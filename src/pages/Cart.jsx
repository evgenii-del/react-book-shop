import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line import/named
import { CartItem, Header } from '../components';

const Cart = () => {
  const { user, cart } = useSelector((state) => state);

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
            {cart.books.map((item) => <CartItem item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
