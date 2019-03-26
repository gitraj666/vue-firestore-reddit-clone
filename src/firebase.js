import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC9-1Dah68iQtY98CncMgt4ATy7DurW5hU',
  authDomain: 'reddit-clone-9a857.firebaseapp.com',
  databaseURL: 'https://reddit-clone-9a857.firebaseio.com',
  projectId: 'reddit-clone-9a857',
  storageBucket: 'reddit-clone-9a857.appspot.com',
  messagingSenderId: '479868880804',
};
firebase.initializeApp(config);

export default firebase;
