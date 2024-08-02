import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 const firebaseConfig = {
  apiKey: "AIzaSyCx_sxHbm-HXAgMP-BLKshpKCY0CA3Hzy8",
  authDomain: "netflix-clone-579f3.firebaseapp.com",
  projectId: "netflix-clone-579f3",
  storageBucket: "netflix-clone-579f3.appspot.com",
  messagingSenderId: "20793855748",
  appId: "1:20793855748:web:cface786ff0fad24f38a51",
  measurementId: "G-9FE7DKTTK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);