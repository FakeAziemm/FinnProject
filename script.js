// script.js
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.querySelector("h1");

noBtn.addEventListener("click", () => {
    yesBtn.textContent = "Betul ke niee??";
    yesBtn.style.fontSize = "2rem";  // Make the "Yes" button bigger
});

noBtn.addEventListener("click", () => {
    yesBtn.textContent = "Fikir betui betui..";
    yesBtn.style.fontSize = "4rem";  // Make the "Yes" button bigger
});

noBtn.addEventListener("click", () => {
    yesBtn.textContent = "DAH LAA TEKAN NO TUU";
    yesBtn.style.fontSize = "6rem";  // Make the "Yes" button bigger
});

noBtn.addEventListener("click", () => {
    yesBtn.textContent = "DAH TAKDE OPTION LAIN >:P ";
    yesBtn.style.fontSize = "8rem";  // Make the "Yes" button bigger
});

yesBtn.addEventListener("click", () => {
    // You can add a fun action when they click "Yes", for example:
    alert("Yayyy officially couple! <3");
});