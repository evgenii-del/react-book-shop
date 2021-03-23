import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Header } from '../components';
import { getCalendarData } from '../redux/actions/catalog';

const Detail = () => {
  const { user, books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    dispatch(getCalendarData(user.token));
  }, []);

  return (
    <div className="container">
      <Header />
      <nav className="nav">
        <input
          className="nav__form-input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChangeSearch}
        />
      </nav>
      <div className="catalog">
        <h2 className="catalog__title">Catalog</h2>
        <div className="catalog__content">
          {books.data
            .filter((book) => book.title.toLowerCase().includes(search.toLowerCase().trim()))
            .map((book) => (
              <Card book={book} key={book.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
