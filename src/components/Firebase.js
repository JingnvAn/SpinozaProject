import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWY5lb6AFBUU97tVILtb8Hyo5t5Xw9DjA",
  authDomain: "spinoza-f6739.firebaseapp.com",
  projectId: "spinoza-f6739",
  storageBucket: "spinoza-f6739.appspot.com",
  messagingSenderId: "366672019324",
  appId: "1:366672019324:web:21df2c4294fb8432762ef9",
  databaseURL: "https://spinoza-f6739-default-rtdb.firebaseio.com/",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.apps;
const auth = app.auth();

export {
  auth
};
