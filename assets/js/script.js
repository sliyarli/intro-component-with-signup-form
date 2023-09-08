function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function getErrorElements(inputElement) {
  const errorText = inputElement.parentElement.nextElementSibling;
  const errorIcon = inputElement.nextElementSibling;
  return { errorText, errorIcon };
}
function displayError(inputElement, errorMessage) {
  const { errorText, errorIcon } = getErrorElements(inputElement);
  errorText.textContent = errorMessage;
  errorText.style.visibility = "visible";
  errorIcon.style.opacity = "1";
  inputElement.style.borderColor = "var(--primary-red)";
}
function removeError(inputElement) {
  const { errorText, errorIcon } = getErrorElements(inputElement);
  errorText.textContent = "";
  errorText.style.visibility = "hidden";
  errorIcon.style.opacity = "0";
  inputElement.style.borderColor = "var(--neutral-grayish-blue)";
}
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
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
firstNameInput.addEventListener("input", () => {
  validateInput(
    firstNameInput,
    (value) => value !== "",
    "First Name cannot be empty"
  );
});
lastNameInput.addEventListener("input", () => {
  validateInput(
    lastNameInput,
    (value) => value !== "",
    "Last Name cannot be empty"
  );
});
emailInput.addEventListener("input", () => {
  validateInput(emailInput, isValidEmail, "Looks like this is not an email");
});
passwordInput.addEventListener("input", () => {
  validateInput(
    passwordInput,
    (value) => value !== "",
    "Password cannot be empty"
  );
});
