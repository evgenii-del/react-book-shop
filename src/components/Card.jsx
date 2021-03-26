import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  const { id, price, author, title, cover } = book;

  return (
    <article className="card" key={id}>
      <Link to={`/catalog/${id}`}>
        <div className="card__header">
          <img className="card__image" src={cover} alt="card item" />
        </div>
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <span className="card__price">{`Price: ${price}$`}</span>
          <span className="card__author">{author}</span>
        </div>
      </Link>
    </article>
  );
};

export default Card;
