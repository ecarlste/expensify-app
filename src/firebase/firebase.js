import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

const docRef = firestore.doc('users/ecarlste');

docRef.set({
  name: 'Erik',
  age: 19,
  isSingle: false
});
