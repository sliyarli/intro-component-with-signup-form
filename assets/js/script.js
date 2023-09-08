// Function to validate an email address using a regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to get error elements associated with an input
function getErrorElements(inputElement) {
  const errorText = inputElement.parentElement.nextElementSibling;
  const errorIcon = inputElement.nextElementSibling;
  return { errorText, errorIcon };
}

// Function to display an error message and icon for an input field
function displayError(inputElement, errorMessage) {
  const { errorText, errorIcon } = getErrorElements(inputElement);
  errorText.textContent = errorMessage;
  errorText.style.visibility = "visible";
  errorIcon.style.opacity = "1";
  inputElement.style.borderColor = "var(--primary-red)";
}

// Function to remove the error message and icon for an input field
function removeError(inputElement) {
  const { errorText, errorIcon } = getErrorElements(inputElement);
  errorText.textContent = "";
  errorText.style.visibility = "hidden";
  errorIcon.style.opacity = "0";
  inputElement.style.borderColor = "var(--neutral-grayish-blue)";
}

// Function to validate an input with a custom validation function
function validateInput(inputElement, validationFunction, errorMessage) {
  const value = inputElement.value.trim();

  if (!validationFunction(value)) {
    displayError(inputElement, errorMessage);
    return false;
  } else {
    removeError(inputElement);
    return true;
  }
}

// Add input event listeners to trigger real-time validation for First Name
const firstNameInput = document.getElementById("firstName");
firstNameInput.addEventListener("input", () => {
  validateInput(
    firstNameInput,
    (value) => value !== "",
    "First Name cannot be empty"
  );
});

// Add input event listeners to trigger real-time validation for Last Name
const lastNameInput = document.getElementById("lastName");
lastNameInput.addEventListener("input", () => {
  validateInput(
    lastNameInput,
    (value) => value !== "",
    "Last Name cannot be empty"
  );
});

// Add input event listeners to trigger real-time validation for Email
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", () => {
  validateInput(emailInput, isValidEmail, "Looks like this is not an email");
});

// Add input event listeners to trigger real-time validation for Password
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
  validateInput(
    passwordInput,
    (value) => value !== "",
    "Password cannot be empty"
  );
});

// Function to validate the form on submission
function validateForm(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const isFirstNameValid = validateInput(
    firstNameInput,
    (value) => value !== "",
    "First Name cannot be empty"
  );

  const isLastNameValid = validateInput(
    lastNameInput,
    (value) => value !== "",
    "Last Name cannot be empty"
  );

  const isEmailValid = validateInput(
    emailInput,
    isValidEmail,
    "Looks like this is not an email"
  );

  const isPasswordValid = validateInput(
    passwordInput,
    (value) => value !== "",
    "Password cannot be empty"
  );

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
    alert("All inputs are valid! Form can be submitted.");
  }
}

// Add a submit event listener to the form to trigger form validation
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
