// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt8TxIM_m7OaUlxT2WgDhS13jYFp7VvhE",
  authDomain: "jefocusartandtech.firebaseapp.com",
  databaseURL: "https://jefocusartandtech-default-rtdb.firebaseio.com",
  projectId: "jefocusartandtech",
  storageBucket: "jefocusartandtech.appspot.com",
  messagingSenderId: "193944510077",
  appId: "1:193944510077:web:fc7954eed00435bc86db14",
  measurementId: "G-0TSM7T614G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export {storage, db, analytics, auth};


