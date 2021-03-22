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
    <div className="container">
      <Header />
      <div className="detail">
        <h2 className="detail__title">Detail</h2>
        <div className="detail__content">
          <div className="detail__image">
            <img src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg" alt={title} />
          </div>
          <div className="detail__info">
            <h1 className="detail__info-title">{title}</h1>
            <p className="detail__info-author">{author}</p>
            <p className="detail__info-description">{description}</p>
            <p className="detail__info-price">
              Price:
              {price}
              &#36;
            </p>
            <div className="detail__footer">
              <form className="detail__form" onSubmit={handleSubmitForm}>
                <input
                  className="detail__input"
                  type="number"
                  min="0"
                  max={count}
                  value={totalCount}
                  onChange={handleChangeTotalCount}
                />
                <button className="detail__btn" type="submit">Add to cart</button>
              </form>
              <p>
                Total price:
                {totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
