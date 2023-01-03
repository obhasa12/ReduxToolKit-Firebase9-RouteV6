import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChldmMR56hDjHDmpQrdSf1Vtm_sRrqOKo",
    authDomain: "acen-blog.firebaseapp.com",
    projectId: "acen-blog",
    storageBucket: "acen-blog.appspot.com",
    messagingSenderId: "413002487582",
    appId: "1:413002487582:web:8c496791ef2fa5c4a59b0f",
    measurementId: "G-5VREJFYWNN"
  };

//Init firebase
initializeApp(firebaseConfig);

//init firebase service
export const db = getFirestore();
export const auth = getAuth();

//Collection ref
const colRef = collection(db, "projects");

export default colRef;



