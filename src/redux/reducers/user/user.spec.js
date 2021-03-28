import userReducer from './user';
import { LOGOUT, SET_USER } from '../../actions/user/user';

describe('user reducer', () => {
  const userItem = {
    username: 'Evgenii',
    avatar: 'https://api.hello-avatar.com/adorables/100/asdasd.png',
    token: '2wao7ko615gqjau2apcxoi',
  };
  const initialCart = {};

  it('should return the initial user', () => {
    expect(userReducer(undefined, {})).toEqual(initialCart);
  });

  it('should add user data to store', () => {
    expect(
      userReducer(undefined, {
        type: SET_USER,
        payload: userItem,
      })
    ).toEqual(userItem);
  });

  it('should remove user data from store', () => {
    expect(
      userReducer(undefined, {
        type: LOGOUT,
      })
    ).toEqual(initialCart);
  });
});
