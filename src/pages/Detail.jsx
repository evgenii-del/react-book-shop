import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from '../components';

const Detail = () => {
  const { user, books } = useSelector((state) => state);
  const { id } = useParams();
  const book = books.data.filter((item) => item.id === id);
  const {
    count,
    price,
    title,
    author,
    description,
    cover,
    tags,
  } = book[0];

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
            <span className="main__detail-price">
              {price}
              &#36;
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
