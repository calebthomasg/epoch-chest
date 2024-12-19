import {loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
import { loginUser } from "./auth.mjs";

// Handle the login form submission
document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the username and password inputs
    const username = event.target[0].value;
    const password = event.target[1].value;

    // Call loginUser and display the result
    const result = loginUser(username, password);
    alert(result.message); // Show success or error message
    if (result.success) {
        // Save the logged-in user's username to localStorage
        localStorage.setItem("loggedInUser", username);
        // Redirect to the dashboard
        window.location.href = "/dashboard/index.html";
    }
});

