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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdDate = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdDate,
          ...additionalData
        })
      } catch (error) {
        console.log('User error Occured', error.message);
      }
    }
    return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;