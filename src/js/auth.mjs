import { getLocalStorage, setLocalStorage} from "./utils.mjs";

//DEFAULT FOR TESTING
const defaultUsers = [
    { username: "testuser", password: "12345"},
    { username: "johndoe", password: "mypassword"}
];

if (!getLocalStorage("users")){
    setLocalStorage("users", defaultUsers);
}

export function loginUser(username, password) {
    const users = getLocalStorage("users") || []; //Retrieve users from localStorage
    //or use an empty array
    const user = users.find(u => u.username === username && u.password === password);

    if (user){
        return { success: true, message: "Login successful"};
    } else{
        return {success: false, message: "Invalid username or password."};
    }
}

console.log(loginUser("testuser", "12345")); //should log success
console.log(loginUser("testuser", "wrongpassword")); //should log false
// import { LocalStorage } from "node-localstorage";

// const localStorage = new LocalStorage('./scratch'); // Creates a local directory to store data

// export function getLocalStorage(key) {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : null;
// }

// export function setLocalStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }
