import {
  ADD_BOOK_TO_CART,
  CLEAR_CART,
  DECREASE_COUNT_OF_BOOK,
  INCREASE_COUNT_OF_BOOK,
  REMOVE_BOOK_FROM_CART,
  addBookToCart,
  clearCart,
  decreaseCountOfBook,
  increaseCountOfBook,
  removeBookFromCart,
} from './cart';

describe('should cart actions work', () => {
  it('should create an action to add a book to cart', () => {
    const data = 'Finish docs';
    const expectedAction = {
      type: ADD_BOOK_TO_CART,
      payload: data,
    };
    expect(addBookToCart(data)).toEqual(expectedAction);
  });

  it('should create an action to remove a book from cart', () => {
    const id = 1;
    const expectedAction = {
      type: REMOVE_BOOK_FROM_CART,
      payload: id,
    };
    expect(removeBookFromCart(id)).toEqual(expectedAction);
  });

  it('should create an action to increase count of book in cart', () => {
    const id = 1;
    const expectedAction = {
      type: INCREASE_COUNT_OF_BOOK,
      payload: id,
    };
    expect(increaseCountOfBook(id)).toEqual(expectedAction);
  });

  it('should create an action to decrease count of book in cart', () => {
    const id = 1;
    const expectedAction = {
      type: DECREASE_COUNT_OF_BOOK,
      payload: id,
    };
    expect(decreaseCountOfBook(id)).toEqual(expectedAction);
  });

  it('should create an action to clear cart', () => {
    const expectedAction = {
      type: CLEAR_CART,
    };
    expect(clearCart()).toEqual(expectedAction);
  });
});
