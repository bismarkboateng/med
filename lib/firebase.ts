import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAuWreZNObgp9z2S9huJt_f0M0YsxWPsfQ",
  authDomain: "connect-d23ef.firebaseapp.com",
  projectId: "connect-d23ef",
  storageBucket: "connect-d23ef.appspot.com",
  messagingSenderId: "111417488618",
  appId: "1:111417488618:web:e621887accda57effed393",
  measurementId: "G-KJH6Q42507"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
