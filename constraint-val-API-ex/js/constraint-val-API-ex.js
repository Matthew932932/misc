const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const username = document.getElementById("username");
const usError = document.querySelector("#username + span.error-us");



email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Remove the message content
    emailError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

username.addEventListener("input", (event) => {
  if (username.validity.valid) {
    usError.textContent = ""; // Remove the message content
    usError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showUsError();
  }
});

function showUsError() {
  console.log("us1")
  if (username.validity.valueMissing) {
    // If empty
    usError.textContent = "You need to enter a name bro.";
  } else if (username.validity.typeMismatch) {
    // If it's not an email address,
    usError.textContent = "Entered value needs to be an word???.";
  } else if (username.validity.tooShort) {
    // If the value is too short,
    usError.textContent = `Username should be at least ${username.minLength} characters; you entered ${username.value.length}.`;
  }
  // Add the `active` class
  usError.className = "error-us active";
}

form.addEventListener("submit", (event) => {
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}

