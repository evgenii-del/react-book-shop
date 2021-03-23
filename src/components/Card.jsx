import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { book } = props;
  const { id, price, author, title } = book;

  return (
    <article className="card" key={id}>
      <Link to={`/catalog/${id}`}>
        <div className="card__header">
          <img
            src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg"
            alt="image"
          />
        </div>
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <span className="card__price">{price}</span>
          <span className="card__author">{author}</span>
        </div>
      </Link>
    </article>
  );
};

export default Card;
