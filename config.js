// config.js

// 1. Import the specific Firebase SDKs you need
// We use the same version (12.8.0) as your snippet to ensure compatibility.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-storage.js";

// 2. Your Web App's Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6ooHTR4E1JJq_oauxteei0bd_rx7rsoE",
    authDomain: "duoglobal-96a39.firebaseapp.com",
    projectId: "duoglobal-96a39",
    storageBucket: "duoglobal-96a39.firebasestorage.app",
    messagingSenderId: "477860016020",
    appId: "1:477860016020:web:9b0ab8dd1364f19da0e981",
    measurementId: "G-YNTFM816SD"
};

// 3. Initialize Firebase App
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 4. Initialize Core Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// 5. Enable Offline Persistence (Crucial for PWA)
// This allows the app to load profiles even without an internet connection
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a a time.
        console.warn('Persistence failed: Multiple tabs open.');
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the features required to enable persistence
        console.warn('Persistence not supported by this browser.');
    }
});

// 6. Export services to be used in other files
export { app, analytics, auth, db, storage, googleProvider };
