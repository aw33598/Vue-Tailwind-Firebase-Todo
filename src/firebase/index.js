import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MSID,
  appId: process.env.VUE_APP_APPID
}



firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {
  firebase,
  firestore
};