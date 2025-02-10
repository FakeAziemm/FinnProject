// script.js
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.querySelector("h1");

noBtn.addEventListener("click", () => {
    yesBtn.textContent = "Are you sure??";
    yesBtn.style.fontSize = "2rem";  // Make the "Yes" button bigger
});

yesBtn.addEventListener("click", () => {
    // You can add a fun action when they click "Yes", for example:
    alert("Yay! ❤️");
});