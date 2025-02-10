// script.js
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const question = document.querySelector("h1");

noButton.addEventListener("click", () => {
    yesBtn.textContent = "Betul ke niee??";
    yesBtn.style.fontSize = "2rem";  // Make the "Yes" button bigger
});

noButton.addEventListener("click", () => {
    yesBtn.textContent = "Fikir betui betui..";
    yesBtn.style.fontSize = "4rem";  // Make the "Yes" button bigger
});

noButton.addEventListener("click", () => {
    yesBtn.textContent = "DAH LAA TEKAN NO TUU";
    yesBtn.style.fontSize = "6rem";  // Make the "Yes" button bigger
});

noButton.addEventListener("click", () => {
    yesBtn.textContent = "DAH TAKDE OPTION LAIN >:P ";
    yesBtn.style.fontSize = "8rem";  // Make the "Yes" button bigger
});

yesButton.addEventListener("click", () => {
    // You can add a fun action when they click "Yes", for example:
    alert("Yayyy officially couple! <3");
});