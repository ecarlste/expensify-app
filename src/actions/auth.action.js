import firebase, { googleAuthProvider } from '../firebase/firebase';
import actionTypes from './actionTypes';

export const login = uid => ({
  type: actionTypes.login,
  uid
});

export const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export const logout = () => ({
  type: actionTypes.logout
});

export const startLogout = () => () => firebase.auth().signOut();
