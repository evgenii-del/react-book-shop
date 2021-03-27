import catalogReducer from './catalog';
import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_STARTED,
  GET_BOOKS_SUCCESS,
} from '../../actions/catalog/catalog';

describe('should catalog reducers work', () => {
  const initialCart = {
    data: [],
    isLoading: false,
    error: null,
  };

  const books = [
    {
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
  ];

  const errorMessage = 'error';

  it('should return the initial catalog', () => {
    expect(catalogReducer(undefined, {})).toEqual(initialCart);
  });

  it('should change isLoading value', () => {
    expect(
      catalogReducer(initialCart, {
        type: GET_BOOKS_STARTED,
      })
    ).toEqual({
      data: [],
      isLoading: true,
      error: null,
    });
  });

  it('should add book data to store', () => {
    expect(
      catalogReducer(initialCart, {
        type: GET_BOOKS_SUCCESS,
        payload: books,
      })
    ).toEqual({
      data: books,
      isLoading: false,
      error: null,
    });
  });

  it('should change error value', () => {
    expect(
      catalogReducer(initialCart, {
        type: GET_BOOKS_FAILURE,
        payload: errorMessage,
      })
    ).toEqual({
      data: [],
      isLoading: false,
      error: errorMessage,
    });
  });
});
