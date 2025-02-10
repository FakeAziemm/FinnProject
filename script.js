let noClickCount = 0;  // Initialize a counter to track how many times "No" is clicked

function handleYes() {
  // Action when the "Yes" button is clicked
  alert("Yayy, officially couple B)");
}

function handleNo() {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  // Increment the counter for each "No" click
  noClickCount++;

  if (noClickCount === 1) {
    // After the first "No" click
    yesButton.innerHTML = "Pasti ke nie??";  // Change text to "Are you sure??"
    yesButton.style.fontSize = "30px";  // Make the text larger
  } else if (noClickCount === 2) {
    // After the second "No" click
    yesButton.innerHTML = "PLSSSS ";  // Change text to "PLEASEEE"
    yesButton.style.fontSize = "40px";  // Make the text even bigger
  } else if (noClickCount >= 3) {
    // After the third "No" click
    noButton.innerHTML = "Button No is Not available";  // Change "No" button text to "Not available"
    noButton.disabled = true;  // Disable the "No" button after 3 clicks
  }
}