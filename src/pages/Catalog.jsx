import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Card, Header } from '../components';
import { getCalendarData } from '../store/actions';

const Detail = () => {
  const { user, books } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCalendarData(user.token));
  }, []);

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Header />
      <div className="catalog">
        <h2 className="catalog__title">Catalog</h2>
        <div className="catalog__content">
          {books.data.map((book) => <Card book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default Detail;
