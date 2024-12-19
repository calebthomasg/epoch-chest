import { getLocalStorage, setLocalStorage } from "./utils.mjs";

// Default users for testing (only added once if not in localStorage)
const defaultUsers = [
    { username: "testuser", password: "12345" },
    { username: "johndoe", password: "mypassword" }
];

// Check if users exist in localStorage; if not, add default users
if (!getLocalStorage("users")) {
    setLocalStorage("users", defaultUsers);
}

// Login function to validate username and password
export function loginUser(username, password) {
    const users = getLocalStorage("users") || [];
    const user = users.find(u => u.username === username && u.password === password);

    // Return success or failure messages
    if (user) {
        return { success: true, message: "Login successful!" };
    } else {
        return { success: false, message: "Invalid username or password." };
    }
}

// Signup function to add a new user to localStorage
export function signupUser(username, password) {
    const users = getLocalStorage("users") || [];
    const userExists = users.some(u => u.username === username);

    if (userExists) {
        return { success: false, message: "Username already exists!" };
    }

    users.push({ username, password });
    setLocalStorage("users", users);
    return { success: true, message: "Signup successful!" };
}

