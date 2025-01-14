import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc, collection, query, where, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAZ4-0RxfDvbV9J9cTWKQuRA3bcft0-R0",
    authDomain: "luminous-298ec.firebaseapp.com",
    projectId: "luminous-298ec",
    storageBucket: "luminous-298ec.firebasestorage.app",
    messagingSenderId: "22318750129",
    appId: "1:22318750129:web:9642a2aebba98151238590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Fetch user data if logged in
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    const username = userData.username;

                    // Display greeting
                    const greetingElement = document.getElementById("user-greeting");
                    const currentHour = new Date().getHours();

                    let greeting;
                    if (currentHour >= 0 && currentHour < 12) {
                        greeting = "Good morning";
                    } else if (currentHour >= 12 && currentHour < 17) {
                        greeting = "Good afternoon";
                    } else {
                        greeting = "Good evening";
                    }

                    greetingElement.textContent = `${greeting}, ${username}.`;
                } else {
                    console.error("No such document!");
                }
            })
            .catch((error) => {
                console.error("Error fetching user document:", error);
            });
    } else {
        // Redirect to login if not authenticated
        window.location.href = "login.html";
    }
});

