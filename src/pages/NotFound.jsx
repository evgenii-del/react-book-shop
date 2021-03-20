import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h1 className="not-found__title">Oops!</h1>
    <div className="not-found__content">
      <span className="not-found__span">404 Error - Page Not Found</span>
      <p className="not-found__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ab,
        debitisdeserunt dolore enim et, fugiat
        ipsa natus obcaecati pariatur, quo rem sint sunt tenetur
        ullam vitae. Ab ad asperiores voluptatem?
      </p>
      <Link to="/catalog" className="not-found__btn">Go To Homepage</Link>
    </div>
  </div>
);

export default NotFound;
