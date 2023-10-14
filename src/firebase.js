import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGIrZEnmC2PGXha-dwx2RcEZsugDPKvK4",
  authDomain: "blog-with-react-8041e.firebaseapp.com",
  projectId: "blog-with-react-8041e",
  storageBucket: "blog-with-react-8041e.appspot.com",
  messagingSenderId: "988742477998",
  appId: "1:988742477998:web:8219d618469974a9d9653f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };