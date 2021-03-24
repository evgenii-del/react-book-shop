import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components';
import { addBookToCart } from '../redux/actions/cart';

const Detail = () => {
  const { books, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const book = books.data.find((item) => item.id === id);
  const isInCart = cart.books.find((item) => item.book.id === id);
  const { price, title, author, description, tags, cover } = book;

  const handleAddBookToCart = () => {
    const cartItem = {
      book,
      totalCount: 1,
      totalPrice: book.price,
    };
    dispatch(addBookToCart(cartItem));
    history.push('/cart');
  };

  return (
    <div className="container">
      <Header />
      <div className="detail">
        <h2 className="detail__title">Detail</h2>
        <div className="detail__content">
          <div className="detail__image-container">
            <img className="detail__image" src={cover} alt={title} />
          </div>
          <div className="detail__info">
            <h1 className="detail__info-title">{title}</h1>
            <div className="detail__info-tags">
              {tags.map((tag) => (
                <span className="detail__info-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="detail__info-author">{author}</p>
            <p className="detail__info-description">{description}</p>
            <div className="detail__footer">
              <p className="detail__info-price">{`Price: ${price}$`}</p>
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
      </div>
    </div>
  );
};

export default Detail;
