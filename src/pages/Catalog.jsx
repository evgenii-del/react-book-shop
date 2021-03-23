import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Header } from '../components';
import { getCalendarData } from '../redux/actions/catalog';

const Detail = () => {
  const { user, books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  // eslint-disable-next-line consistent-return
  const checkPrice = (book) => {
    const { price } = book;
    switch (select) {
      case '1':
        if (price < 25) {
          return book;
        }
        break;
      case '2':
        if (price >= 25 && price <= 50) {
          return book;
        }
        break;
      case '3':
        if (price > 50) {
          return book;
        }
        break;
      default:
        return book;
    }
  };

  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleChangeSelect = ({ target }) => {
    setSelect(target.value);
  };

  useEffect(() => {
    dispatch(getCalendarData(user.token));
  }, []);

  return (
    <div className="container">
      <Header />
      <nav className="nav">
        <select className="nav__select" value={select} onChange={handleChangeSelect}>
          <option value="0">all</option>
          <option value="1">less then 25</option>
          <option value="2">more then 25 less then 50</option>
          <option value="3">more then 50</option>
        </select>
        <input
          className="nav__input"
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
            .filter((book) => checkPrice(book))
            .map((book) => (
              <Card book={book} key={book.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
