import {loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
import { signupUser } from "./auth.mjs";

// Handle the signup form submission
document.querySelector(".signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the username and password inputs
    const username = event.target[0].value; // Full Name (use for username in this example)
    const password = event.target[2].value; // Password
    const confirmPassword = event.target[3].value; // Confirm Password

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Call signupUser and display the result
    const result = signupUser(username, password);
    alert(result.message); // Show success or error message
    if (result.success) {
        window.location.href = "/login/index.html"; // Redirect to login page
    }
});
