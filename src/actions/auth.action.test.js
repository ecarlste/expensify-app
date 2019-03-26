import actionTypes from './actionTypes';
import { login, logout } from './auth.action';

test('should setup login action generator with user id', () => {
  const uid = '123abc';

  const action = login(uid);

  expect(action).toEqual({
    type: actionTypes.login,
    uid
  });
});

test('should setup logout action generator', () => {
  const action = logout();

  expect(action).toEqual({
    type: actionTypes.logout
  });
});
