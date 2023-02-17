import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkNcaYw9LPhRzFpHG4TeUfR4FzkPgwYFM",
  authDomain: "faucet-homepage.firebaseapp.com",
  projectId: "faucet-homepage",
  storageBucket: "faucet-homepage.appspot.com",
  messagingSenderId: "516464793164",
  appId: "1:516464793164:web:65af941daf196712a906e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);