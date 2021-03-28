import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_STARTED,
  GET_BOOKS_SUCCESS,
  getBooksFailure,
  getBooksStarted,
  getBooksSuccess,
  getCalendarData,
} from './catalog';
import { LOGOUT } from '../user/user';

const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

  it('check wrong token', async () => {
    const store = mockStore();
    const mockData = {
      data: 123,
    };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

    const expectedActions = [
      { type: GET_BOOKS_STARTED },
      { type: GET_BOOKS_FAILURE, payload: 'Request failed with status code 401' },
      { type: LOGOUT },
    ];

    await store.dispatch(getCalendarData());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
