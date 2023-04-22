import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0T0omjwSHajGdjyZUsptjllACVew-3YY",
  authDomain: "vue-fire-auth-yt-50931.firebaseapp.com",
  projectId: "vue-fire-auth-yt-50931",
  storageBucket: "vue-fire-auth-yt-50931.appspot.com",
  messagingSenderId: "189586459058",
  appId: "1:189586459058:web:6d34fe925ab5026a7cbcab"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }