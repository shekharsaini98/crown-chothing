import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVdbFRwRxHW79v-0gGXP3OLSg5q7mQnSc",
    authDomain: "crwn-db-shekhar.firebaseapp.com",
    databaseURL: "https://crwn-db-shekhar.firebaseio.com",
    projectId: "crwn-db-shekhar",
    storageBucket: "crwn-db-shekhar.appspot.com",
    messagingSenderId: "460707243504",
    appId: "1:460707243504:web:601d366993a3d059026935"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;