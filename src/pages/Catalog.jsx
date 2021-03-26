import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Header } from '../components';
import { getCalendarData } from '../redux/actions/catalog';

const Detail = () => {
  const { isLoading, data } = useSelector((state) => state.books);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('0');

  const checkPrice = (book) => {
    const { price } = book;
    if (select === '0') return book;
    if (select === '1' && price < 25) return book;
    if (select === '2' && price >= 25 && price <= 50) return book;
    if (select === '3' && price > 50) return book;
    return null;
  };

  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleChangeSelect = ({ target }) => {
    setSelect(target.value);
  };

  useEffect(() => {
    dispatch(getCalendarData(token));
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
        {isLoading ? (
          <span>loading...</span>
        ) : (
          <div className="catalog__content">
            {data
              .filter((book) => book.title.toLowerCase().includes(search.toLowerCase().trim()))
              .filter((book) => checkPrice(book))
              .map((book) => (
                <Card book={book} key={book.id} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
