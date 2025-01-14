import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, query, where, getDoc, getDocs, updateDoc, doc, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

async function submitVipKey() {
    const vipKeyInput = document.getElementById("vipKeyInput").value.trim();
    const userId = auth.currentUser?.uid;

    const statusMessage = document.getElementById("statusMessage");

    if (!userId) {
        statusMessage.textContent = "You need to be logged in to claim a VIP key.";
        statusMessage.style.color = "red";
        return;
    }

    if (!vipKeyInput) {
        statusMessage.textContent = "Please enter a VIP key.";
        statusMessage.style.color = "red";
        return;
    }

    try {
        const keysCollection = collection(db, "keys");
        const keyQuery = query(keysCollection, where("key", "==", vipKeyInput));
        const querySnapshot = await getDocs(keyQuery);

        if (querySnapshot.empty) {
            statusMessage.textContent = "Invalid VIP key.";
            statusMessage.style.color = "red";
            return;
        }

        const keyDoc = querySnapshot.docs[0];
        const keyData = keyDoc.data();

        if (keyData.isUsed === true) {
            statusMessage.textContent = "This key has already been used.";
            statusMessage.style.color = "red";
        } else {
            await updateDoc(keyDoc.ref, { isUsed: true });

            const userDocRef = doc(db, "users", userId);
            await updateDoc(userDocRef, { vipStatus: true });

            statusMessage.textContent = "Congratulations! You are now a VIP.";
            statusMessage.style.color = "green";
        }
    } catch (error) {
        console.error("Error submitting VIP key:", error);
        statusMessage.textContent = "An error occurred. Please try again.";
        statusMessage.style.color = "red";
    }
}

document.getElementById("submitVipKeyButton").addEventListener("click", submitVipKey);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef)
            .then((docSnap) => {
                const statusMessage = document.getElementById("statusMessage");
                if (docSnap.exists() && docSnap.data().admin === true) {
                    document.getElementById('generate-vip-key').disabled = false;

                    document.getElementById('generate-vip-key').addEventListener('click', () => {
                        const vipKey = generateVIPKey();
                        document.getElementById('vip-key').value = vipKey;

                        const keysCollection = collection(db, 'keys');
                        addDoc(keysCollection, {
                            key: vipKey,
                            isUsed: false,
                            createdAt: new Date()

                        
                        })
                            .then(() => {
                                statusMessage.textContent = 'VIP key successfully created';
                                statusMessage.style.color = "green"
                            })
                            .catch((error) => {
                                statusMessage.textContent = "Error creating VIP key:", error;
                                statusMessage.style.color = "green"
                            });
                    });
                } else {
                    statusMessage.textContent = 'You do not have permission to generate  keys.';
                    statusMessage.style.color = "red"
                }
            })
            .catch((error) => {
                statusMessage.textContent = 'An error occured', error;
                statusMessage.style.color = "red"
            });
    }
});

function generateVIPKey() {
    return 'VIP-' + Math.random().toString(36).substring(2, 25).toUpperCase();
}
