import firebase from "firebase";
import { getDatabase } from "firebase/database";

const database = getDatabase();
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000/Container',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'spinozabrandeis.page.link'
};

const firebaseConfig = {
  apiKey: "AIzaSyCWY5lb6AFBUU97tVILtb8Hyo5t5Xw9DjA",
  authDomain: "spinoza-f6739.firebaseapp.com",
  projectId: "spinoza-f6739",
  storageBucket: "spinoza-f6739.appspot.com",
  messagingSenderId: "366672019324",
  appId: "1:366672019324:web:21df2c4294fb8432762ef9"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.apps;
const auth = app.auth();

export {
  auth,
  actionCodeSettings,
};