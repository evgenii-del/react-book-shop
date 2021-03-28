import { LOGOUT, SET_USER, setUser, logout } from './user';

describe('should user actions work', () => {
  it('should create an action to set user', () => {
    const data = 'user';
    const expectedAction = {
      type: SET_USER,
      payload: data,
    };
    expect(setUser(data)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});
