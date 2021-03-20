import React from 'react';

const Card = () => (
  <article className="card">
    <div className="card__header">
      <a href="">
        <img src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg" alt="" />
      </a>
    </div>
    <div className="card__main">
      <span className="card__main-price">15 $</span>
      <span className="card__main-author">Author name</span>
      <a href="" className="card__main-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </a>
    </div>
  </article>
);

export default Card;
