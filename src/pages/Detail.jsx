import React from 'react';

const Detail = () => (
  <div className="main">
    <h2 className="main__title">Detail</h2>
    <div className="main__detail">
      <div className="main__detail-image">
        <img src="https://images.pexels.com/photos/5582999/pexels-photo-5582999.jpeg" alt="image" />
      </div>
      <div className="main__detail-info">
        <h1 className="main__detail-title">Title</h1>
        <span className="main__detail-price">15 $</span>
        <p className="main__detail-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequuntur dolorum esse eum mollitia numquam optio, placeat porro recusandae
          temporibus veniam. Accusantium aut consectetur earum ipsam neque totam velit veniam
          vero?
        </p>
      </div>
    </div>
  </div>
);

export default Detail;
