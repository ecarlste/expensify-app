import firebase, { googleAuthProvider } from '../firebase/firebase';
import actionTypes from './actionTypes';

export const login = user => ({
  type: actionTypes.login,
  user
});

export const startLogin = user => dispatch => {
  return firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(something => {
      console.log(something);
      dispatch(login(user));
    });
};

export const logout = () => ({
  type: actionTypes.logout
});

export const startLogout = () => dispatch =>
  firebase
    .auth()
    .signOut()
    .then(() => dispatch(logout));
