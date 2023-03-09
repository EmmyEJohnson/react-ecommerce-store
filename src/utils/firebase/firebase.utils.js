import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // signOut,
  // onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfdtrRhayBtlFeRnoYVO4CMu6JbksrU7A",
  authDomain: "react-clothing-db-28a98.firebaseapp.com",
  projectId: "react-clothing-db-28a98",
  storageBucket: "react-clothing-db-28a98.appspot.com",
  messagingSenderId: "777007811713",
  appId: "1:777007811713:web:6764c740e5025db4519180"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

