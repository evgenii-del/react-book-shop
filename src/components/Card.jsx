import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => (
  <article className="card">
    <div className="card__header">
      <Link to="/catalog/1">
        <img src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg" alt="" />
      </Link>
    </div>
    <div className="card__main">
      <span className="card__main-price">15 $</span>
      <span className="card__main-author">Author name</span>
      <Link to="/catalog/1" className="card__main-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Link>
    </div>
  </article>
);

export default Card;
