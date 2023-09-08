// Function to validate an email address using a regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getErrorElements(inputElement) {
  const errorText = inputElement.parentElement.nextElementSibling;
  const errorIcon = inputElement.nextElementSibling;
  return { errorText, errorIcon };
}

// Function to display an error message and icon for an input field
function displayError(inputElement, errorMessage) {
  // Get the error text element and error icon element based on the input element
  const { errorText, errorIcon } = getErrorElements(inputElement);

  // Set the error message text, make it visible, and show the error icon
  errorText.textContent = errorMessage;
  errorText.style.visibility = "visible";
  errorIcon.style.opacity = "1";

  // Change the input field's border color to indicate an error
  inputElement.style.borderColor = "var(--primary-red)";
}

// Function to remove the error message and icon for an input field
function removeError(inputElement) {
  // Get the error text element and error icon element based on the input element
  const { errorText, errorIcon } = getErrorElements(inputElement);

  // Clear the error message text, hide it, and hide the error icon
  errorText.textContent = "";
  errorText.style.visibility = "hidden";
  errorIcon.style.opacity = "0";

  // Restore the input field's border color
  inputElement.style.borderColor = "var(--neutral-grayish-blue)";
}

// Function to validate the First Name input
function validateFirstName() {
  const firstName = document.getElementById("firstName").value.trim();

  if (firstName === "") {
    displayError(
      document.getElementById("firstName"),
      "First Name cannot be empty"
    );
  } else {
    removeError(document.getElementById("firstName"));
  }
}

// Function to validate the Last Name input
function validateLastName() {
  const lastName = document.getElementById("lastName").value.trim();

  if (lastName === "") {
    displayError(
      document.getElementById("lastName"),
      "Last Name cannot be empty"
    );
  } else {
    removeError(document.getElementById("lastName"));
  }
}

// Function to validate the Email input
function validateEmail() {
  const email = document.getElementById("email").value.trim();

  if (!isValidEmail(email)) {
    displayError(
      document.getElementById("email"),
      "Looks like this is not an email"
    );
  } else {
    removeError(document.getElementById("email"));
  }
}

// Function to validate the Password input
function validatePassword() {
  const password = document.getElementById("password").value.trim();

  if (password === "") {
    displayError(
      document.getElementById("password"),
      "Password cannot be empty"
    );
  } else {
    removeError(document.getElementById("password"));
  }
}

// Add input event listeners to trigger real-time validation
const firstNameInput = document.getElementById("firstName");
firstNameInput.addEventListener("input", validateFirstName);

const lastNameInput = document.getElementById("lastName");
lastNameInput.addEventListener("input", validateLastName);

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);

const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", validatePassword);

// Function to validate the form on submission
function validateForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const inputFields = document.querySelectorAll("input");
  let allInputsValid = true;

  inputFields.forEach((input) => removeError(input));

  if (firstName === "") {
    displayError(
      document.getElementById("firstName"),
      "First Name cannot be empty"
    );
    allInputsValid = false;
  }

  if (lastName === "") {
    displayError(
      document.getElementById("lastName"),
      "Last Name cannot be empty"
    );
    allInputsValid = false;
  }

  if (!isValidEmail(email)) {
    displayError(
      document.getElementById("email"),
      "Looks like this is not an email"
    );
    allInputsValid = false;
  }

  if (password === "") {
    displayError(
      document.getElementById("password"),
      "Password cannot be empty"
    );
    allInputsValid = false;
  }

  if (allInputsValid) {
    // If all inputs are valid, show an alert
    alert("All inputs are valid! Form can be submitted.");
  }
}

// Add a submit event listener to the form to trigger form validation
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
