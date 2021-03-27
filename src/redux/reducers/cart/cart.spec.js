import cartReducer from './cart';
import {
  ADD_BOOK_TO_CART,
  CLEAR_CART,
  DECREASE_COUNT_OF_BOOK,
  INCREASE_COUNT_OF_BOOK,
  REMOVE_BOOK_FROM_CART,
} from '../../actions/cart/cart';

describe('should cart reducers work', () => {
  const booksItem = {
    book: {
      id: '4',
      title: 'Eloquent Javascript',
      author: 'Marijn Haverbeke',
      level: 'Beginner',
      description:
        'A book providing an introduction to the JavaScript language and programming in general.',
      cover: 'https://jsbooks.revolunet.com/img/cover_eloquentjs.png',
      tags: ['core'],
      price: 20.1,
      count: 10,
    },
    totalCount: 1,
    totalPrice: 20.1,
  };

  const initialCart = {
    books: [],
    totalCount: 0,
    totalPrice: 0,
  };

  it('should return the initial cart', () => {
    expect(cartReducer(undefined, {})).toEqual(initialCart);
  });

  it('should add book to cart', () => {
    expect(
      cartReducer(initialCart, {
        type: ADD_BOOK_TO_CART,
        payload: booksItem,
      })
    ).toEqual({
      books: [booksItem],
      totalCount: 1,
      totalPrice: 20.1,
    });
  });

  it('should remove book from cart', () => {
    expect(
      cartReducer(
        {
          books: [booksItem],
          totalCount: 1,
          totalPrice: 20.1,
        },
        {
          type: REMOVE_BOOK_FROM_CART,
          payload: '4',
        }
      )
    ).toEqual(initialCart);
  });

  it('should increase count of book in cart', () => {
    expect(
      cartReducer(
        {
          books: [booksItem],
          totalCount: 1,
          totalPrice: 20.1,
        },
        {
          type: INCREASE_COUNT_OF_BOOK,
          payload: '4',
        }
      )
    ).toEqual({
      books: [
        {
          book: booksItem.book,
          totalCount: 2,
          totalPrice: 40.2,
        },
      ],
      totalCount: 2,
      totalPrice: 40.2,
    });
  });

  it('should decrease count of book in cart', () => {
    expect(
      cartReducer(
        {
          books: [
            {
              book: booksItem.book,
              totalCount: 2,
              totalPrice: 40.2,
            },
          ],
          totalCount: 1,
          totalPrice: 20.1,
        },
        {
          type: DECREASE_COUNT_OF_BOOK,
          payload: '4',
        }
      )
    ).toEqual({
      books: [booksItem],
      totalCount: 1,
      totalPrice: 20.1,
    });
  });

  it('should clear cart', () => {
    expect(
      cartReducer(
        {
          books: [booksItem],
          totalCount: 1,
          totalPrice: 20.1,
        },
        {
          type: CLEAR_CART,
        }
      )
    ).toEqual(initialCart);
  });
});
