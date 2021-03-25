import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_STARTED,
  GET_BOOKS_SUCCESS,
  getBooksFailure,
  getBooksStarted,
  getBooksSuccess,
} from '../catalog';

describe('should catalog actions work', () => {
  it('should create an action to start getting books data', () => {
    const expectedAction = {
      type: GET_BOOKS_STARTED,
    };
    expect(getBooksStarted()).toEqual(expectedAction);
  });

  it('should create an action for successful request', () => {
    const data = 'data';
    const expectedAction = {
      type: GET_BOOKS_SUCCESS,
      payload: data,
    };
    expect(getBooksSuccess(data)).toEqual(expectedAction);
  });

  it('should create an action for failure request', () => {
    const error = 'error';
    const expectedAction = {
      type: GET_BOOKS_FAILURE,
      payload: error,
    };
    expect(getBooksFailure(error)).toEqual(expectedAction);
  });
});
