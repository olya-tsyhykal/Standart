import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyAonQTFuujzl6XrOoFAcr4ttQSBjiH_aRA",
  // authDomain: "debstat-d9c5c.firebaseapp.com",
  // projectId: "debstat-d9c5c",
  // storageBucket: "debstat-d9c5c.appspot.com",
  // messagingSenderId: "603277078796",
  // appId: "1:603277078796:web:4dccc3ee2981264693d929",
  // measurementId: "G-P31WHTNNG8",
  apiKey: "AIzaSyCJLo1Rvph0AZ8cd3VpPkrXqaeKtqoKWvg",
  authDomain: "standart-e8f58.firebaseapp.com",
  projectId: "standart-e8f58",
  storageBucket: "standart-e8f58.appspot.com",
  messagingSenderId: "596218549966",
  appId: "1:596218549966:web:1ee533ef75979dc635229f",
  measurementId: "G-GFPGMXLP3Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
