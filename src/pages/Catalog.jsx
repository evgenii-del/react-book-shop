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
    <>
      <Header />
      <div className="main">
        <h2 className="main__title">Catalog</h2>
        <div className="main__catalog">
          {books.data.map((book) => <Card book={book} />)}
        </div>
      </div>
    </>
  );
};

export default Detail;
