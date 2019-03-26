import actionTypes from '../actions/actionTypes';
import authReducer from './auth.reducer';

test('should set user id in state during login action', () => {
  const initialState = {};
  const uid = '123xyz';
  const action = {
    type: actionTypes.login,
    uid
  };

  const state = authReducer(initialState, action);

  expect(state).toEqual({
    uid
  });
});

test('should set clear user id in state during logout action', () => {
  const uid = '123xyz';
  const initialState = { uid };
  const action = {
    type: actionTypes.logout
  };

  const state = authReducer(initialState, action);

  expect(state).toEqual({});
});
