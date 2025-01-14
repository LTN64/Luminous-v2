function updateGreeting() {
    const greetingElement = document.querySelector('.user-greeting'); 
    const currentHour = new Date().getHours(); // get user's time

    if (currentHour >= 0 && currentHour < 12) {
        greetingElement.textContent = "Good morning.";
    } else if (currentHour >= 12 && currentHour < 17) { // Afternoon is from 12 to 4:59
        greetingElement.textContent = "Good afternoon.";
    } else {
        greetingElement.textContent = "Good evening."; // 6 pm to 12 am
}
}

// updates when user loads/reloads page
window.onload = updateGreeting;