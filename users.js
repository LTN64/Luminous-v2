// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAZ4-0RxfDvbV9J9cTWKQuRA3bcft0-R0",
    authDomain: "luminous-298ec.firebaseapp.com",
    projectId: "luminous-298ec",
    storageBucket: "luminous-298ec.firebasestorage.app",
    messagingSenderId: "22318750129",
    appId: "1:22318750129:web:9642a2aebba98151238590"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


async function fetchRandomUsername() {
    try {
       
        const usersRef = collection(db, "users");

        const snapshot = await getDocs(usersRef);

        const users = snapshot.docs.map(doc => doc.data());

        if (users.length > 0) {
            
            const randomUser = shuffleArray(users)[0];

            const usernameElement = document.getElementById("test123");
            usernameElement.textContent = "Test for getting user profiles: " + randomUser.username;
        } else {
           
        }
    } catch (error) {
        
    }
}

fetchRandomUsername();
