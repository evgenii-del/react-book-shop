import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components';
import { addBookToCart } from '../store/actions';

const Detail = () => {
  const { user, books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const book = books.data.find((item) => item.id === id);
  const {
    count,
    price,
    title,
    author,
    description,
  } = book;

  const handleChangeTotalCount = ({ target }) => {
    setTotalCount(+target.value);
    setTotalPrice(target.value * price);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const cartItem = {
      book,
      totalCount,
      totalPrice,
    };
    dispatch(addBookToCart(cartItem));
  };

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="main">
        <h2 className="main__title">Detail</h2>
        <div className="main__detail">
          <div className="main__detail-image">
            <img src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg" alt={title} />
          </div>
          <div className="main__detail-info">
            <h1 className="main__detail-title">{title}</h1>
            <p className="main__detail-author">{author}</p>
            <p className="main__detail-description">{description}</p>
            <p className="main__detail-price">
              Price:
              {price}
              &#36;
            </p>
            <div className="main__detail-footer">
              <form className="main__detail-form" onSubmit={handleSubmitForm}>
                <input className="main__detail-input" type="number" min="0" max={count} value={totalCount} onChange={handleChangeTotalCount} />
                <button className="main__detail-btn" type="submit">Add to cart</button>
              </form>
              <p>
                Total price:
                {totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
