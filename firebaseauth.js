import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCAZ4-0RxfDvbV9J9cTWKQuRA3bcft0-R0",
    authDomain: "luminous-298ec.firebaseapp.com",
    projectId: "luminous-298ec",
    storageBucket: "luminous-298ec.firebasestorage.app",
    messagingSenderId: "22318750129",
    appId: "1:22318750129:web:9642a2aebba98151238590"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Store the user ID in memory
let sessionUID = null;

function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function () {
        messageDiv.style.opacity = 0;
    }, 5000);
}

const signUp = document.getElementById('registered');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const username = document.getElementById('rUsername').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                username: username,
                email: email,
            };
           
            const successSpan = document.getElementById("errors");
            successSpan.innerText = "Account Created Successfully!";
            successSpan.style.color = "green";
           
            const docRef = doc(db, "users", user.uid);
            return setDoc(docRef, userData)
                .then(() => {
                    
                    return sendEmailVerification(user);
                });
        })
        .then(() => {
           
            const successSpan = document.getElementById("errors");
            successSpan.innerText = "A verification link has been sent to your email. Please verify your email before logging in.";
            successSpan.style.color = "yellow";
        })
        .then(()=> {
            window.location.href = 'login.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorSpan = document.getElementById("errors");
            if (errorCode === "auth/email-already-in-use") {
                errorSpan.innerText = "Email address already in use!";
            } else {
                errorSpan.innerText = "Unable to create user. Please try again.";
            }
            errorSpan.style.color = "red";
        });
});

const signIn = document.getElementById('login-button');
signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const feedbackSpan = document.getElementById('login-errors');
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        
        if (user.emailVerified) {
            feedbackSpan.innerText = 'Successfully logged in';
            feedbackSpan.style.color = 'green';
           
            // Store user UID in memory
            sessionUID = user.uid;
            
            // Navigate to home page
            window.location.href = 'home.html';
        } else {
            feedbackSpan.innerText = 'Please verify your email before logging in.';
            feedbackSpan.style.color = 'red';
        }
    })
    .catch((error) => {
        feedbackSpan.innerText = 'Invalid credentials';
        feedbackSpan.style.color = 'red';
    });
});

function ForgotPassword() {
    const EmailInput = document.getElementById('username'); 
    const email = EmailInput.value; 
    sendPasswordResetEmail(auth, email)
        .then(() => {
            const feedbackSpan = document.getElementById('login-errors');
            feedbackSpan.innerText = 'Successfully sent you an email';
            feedbackSpan.style.color = 'green';
        })
        .catch(() => {
            const feedbackSpan = document.getElementById('login-errors');
            feedbackSpan.innerText = 'There was an error completing your request';
            feedbackSpan.style.color = 'red';
        });
}

const ForgotPass = document.getElementById('sendPassword');  
ForgotPass.addEventListener('click', (event) => {
    event.preventDefault();  
    ForgotPassword(); 
});
