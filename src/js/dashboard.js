import {loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
// Fetch the logged-in username from localStorage
const username = localStorage.getItem("loggedInUser");

// Ensure the user is logged in before displaying the dashboard
if (!username) {
    alert("You must be logged in to access the dashboard.");
    window.location.href = "/login/index.html"; // Redirect to login if no user is logged in
} else {
    // Update the welcome message with the username
    const usernamePlaceholder = document.getElementById("username-placeholder");
    usernamePlaceholder.textContent = username; // Replace "Name" with the username
}

// Get references to the grid and add button
const memoryGrid = document.getElementById("memory-grid");
const addMemoryBtn = document.getElementById("add-memory-btn");

// Fetch memories from localStorage
const getMemories = () => JSON.parse(localStorage.getItem("memories")) || [];

// Save memories to localStorage
const saveMemories = (memories) => {
  localStorage.setItem("memories", JSON.stringify(memories));
};

// Render the memory cards
const displayMemories = () => {
    const memories = getMemories();
    memoryGrid.innerHTML = ""; // Clear existing cards
  
    memories.forEach((memory, index) => {
      const card = document.createElement("div");
      card.classList.add("memory-card");
  
      // Card content, including the delete button
      card.innerHTML = `
        <p class="memory-card-title">${memory.title || "Untitled Memory"}</p>
        <button class="delete-memory-btn" data-index="${index}">Delete</button>
      `;
  
      // Add event listener to the delete button
      card.querySelector(".delete-memory-btn").addEventListener("click", (e) => {
        deleteMemory(index);
      });
  
      // Add the card to the grid
      memoryGrid.appendChild(card);
    });
  };
  
  // Function to delete a memory by index
  const deleteMemory = (index) => {
    const memories = getMemories();
    memories.splice(index, 1); // Remove the memory at the given index
    saveMemories(memories);
    displayMemories(); // Refresh the memory grid
  };
  

// Handle the "+ Add new" button click
addMemoryBtn.addEventListener("click", () => {
  const title = prompt("Enter the memory title:");
  const content = prompt("Enter the memory content:");

  if (title && content) {
    const memories = getMemories();
    memories.push({ title, content });
    saveMemories(memories);
    displayMemories(); // Refresh the grid
  } else {
    alert("Memory title and content cannot be empty.");
  }
});

// Initial display of saved memories
displayMemories();

