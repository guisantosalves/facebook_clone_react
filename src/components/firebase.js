import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqnj0bmuPtl1pKhyrMpP9KYCkzLFOl_is",
  authDomain: "facebook-clone-926fa.firebaseapp.com",
  projectId: "facebook-clone-926fa",
  storageBucket: "facebook-clone-926fa.appspot.com",
  messagingSenderId: "513692317088",
  appId: "1:513692317088:web:1177d3bb5a43070cb7e0c5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;