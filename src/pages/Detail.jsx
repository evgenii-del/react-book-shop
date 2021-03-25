import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Header } from '../components';
import { addBookToCart } from '../redux/actions/cart';

const Detail = () => {
  const { cart, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const isInCart = cart.books.find((item) => item.book.id === id);

  const [book, setBook] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleAddBookToCart = () => {
    const cartItem = {
      book,
      totalCount: 1,
      totalPrice: book.price,
    };
    dispatch(addBookToCart(cartItem));
    history.push('/cart');
  };

  useEffect(() => {
    axios
      .get(`https://js-band-store-api.glitch.me/books/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setBook(response.data);
        setIsLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="detail">
        <h2 className="detail__title">Detail</h2>
        {isLoading ? (
          <span>loading...</span>
        ) : (
          <div className="detail__content">
            <div className="detail__image-container">
              <img className="detail__image" src={book.cover} alt={book.title} />
            </div>
            <div className="detail__info">
              <h1 className="detail__info-title">{book.title}</h1>
              <div className="detail__info-tags">
                {book.tags.map((tag) => (
                  <span className="detail__info-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="detail__info-author">{book.author}</p>
              <p className="detail__info-description">{book.description}</p>
              <div className="detail__footer">
                <p className="detail__info-price">{`Price: ${book.price}$`}</p>
                {isInCart ? (
                  <Link to="/cart">The book is already in the cart.</Link>
                ) : (
                  <button className="detail__btn" type="button" onClick={handleAddBookToCart}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
