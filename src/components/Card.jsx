import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { book } = props;
  const {
    id,
    price,
    author,
    title,
  } = book;
  return (
    <article className="card" key={id}>
      <Link to={`/catalog/${id}`}>
        <div className="card__header">
          <img src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg" alt="image" />
        </div>
        <div className="card__main">
          <h2 className="card__main-title">{title}</h2>
          <span className="card__main-price">
            {price}
            &#36;
          </span>
          <span className="card__main-author">{author}</span>
        </div>
      </Link>
    </article>
  );
};

export default Card;
