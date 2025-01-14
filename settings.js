import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut,} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, getDoc, doc, updateDoc, setDoc, } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


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
const auth = getAuth(app);

// Listen for the authentication state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Set the email in the disabled input field
    document.getElementById('currentEmail').value = user.email;
  } else {
    document.getElementById('currentEmail').value = "No user found"
  }
});

const logoutButton = document.getElementById('logout');

// Add event listener for the logout button
logoutButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Sign out the user from Firebase
    signOut(auth).then(() => {
        // Redirect to the login page or perform other actions after log out
        window.location.href = 'login.html';  // Adjust the redirect URL as needed
    }).catch((error) => {
        console.error("Error signing out: ", error);
    });
});

const inputField = document.getElementById("new-username");
const button = document.getElementById("change-username-btn");
const message = document.getElementById("statusMessage2");

button.addEventListener("click", async () => {
  const newUsername = inputField.value.trim();

  if (!newUsername) {
    message.textContent = "Username cannot be empty.";
    return;
  }

  try {
    const user = auth.currentUser;

    if (!user) {
      message.textContent = "woohoo you hacked my website congrats";
      return;
    }

    const userDocRef = doc(db, "users", user.uid);

    // Update the username in the "users" collection
    await updateDoc(userDocRef, { username: newUsername });

    message.textContent = "Username changed successfully!";
    message.style.color = "green";
  } catch (error) {
    message.textContent = "Your username contains prohibited words or characters";
    message.style.color = "red";
  }
});