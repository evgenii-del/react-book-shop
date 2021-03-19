import React from 'react';

const Card = () => (
  <div className="card">
    <img className="card__image" src="https://images.pexels.com/photos/1662296/pexels-photo-1662296.jpeg" alt="book" />
    <div className="card__content">
      <h2>Title</h2>
      <p>book author</p>
      <div className="card__footer">
        <p>13$</p>
        <button className="card__btn" type="button">Open</button>
      </div>
    </div>
  </div>
);

export default Card;
