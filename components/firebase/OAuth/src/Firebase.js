import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDzxykgYRYXE-5kK2kjTOkTeztD-gtLWxA",
  authDomain: "basic-auth-dbf70.firebaseapp.com",
  projectId: "basic-auth-dbf70",
  storageBucket: "basic-auth-dbf70.appspot.com",
  messagingSenderId: "498250196902",
  appId: "1:498250196902:web:55f327719a49736a5c5167",
  measurementId: "G-M8CYHV41DS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const gAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, gAuthProvider)
    .then((res) => {
      const name = res.user.displayName;
      const email = res.user.email;
        const profilePic = res.user.photoURL;
        
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("dp", profilePic)
    })
    .catch((err) => {
      console.log(err);
    });
};