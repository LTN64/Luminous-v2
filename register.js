document.addEventListener("DOMContentLoaded", () => {
const registerLink = document.getElementById('register-link');
const registerContainer = document.getElementById('register-container');
const loginLink = document.getElementById('login-link');
const loginContainer = document.querySelector('.login-container');

// Add event listener for "here" link to show the register form
registerLink.addEventListener('click', (event) => {
event.preventDefault(); // Prevent default anchor behavior
loginContainer.classList.add('hidden'); // Hide the login form
registerContainer.classList.remove('hidden'); // Show the register form
});

// Add event listener for "Login here" link to show the login form
loginLink.addEventListener('click', (event) => {
event.preventDefault(); // Prevent default anchor behavior
registerContainer.classList.add('hidden'); // Hide the register form
loginContainer.classList.remove('hidden'); // Show the login form
});
});

