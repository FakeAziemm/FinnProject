// script.js
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const question = document.querySelector("h1");

noButton.addEventListener("click", () => {
    yesButton.textContent = "Betul ke niee??";
    yesButton.style.fontSize = "2rem";  // Make the "Yes" button bigger
});

noButton.addEventListener("click", () => {
    yesButton.textContent = "Fikir betui betui..";
    yesButton.style.fontSize = "4rem";  // Make the "Yes" button bigger
});

noButton.addEventListener("click", () => {
    yesButton.textContent = "DAH LAA TEKAN NO TUU";
    yesButton.style.fontSize = "6rem";  // Make the "Yes" button bigger
});

noButton.addEventListener("click", () => {
    yesButton.textContent = "DAH TAKDE OPTION LAIN >:P ";
    yesButton.style.fontSize = "8rem";  // Make the "Yes" button bigger
});

yesButton.addEventListener("click", () => {
    // You can add a fun action when they click "Yes", for example:
    alert("Yayyy officially couple! <3");
});