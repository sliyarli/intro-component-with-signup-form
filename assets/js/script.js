// Function to validate an email address using a regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to get error elements
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

// Generic validation function
function validateInput(inputElement, validationFn, errorMessage) {
  const inputValue = inputElement.value.trim();
  if (!validationFn(inputValue)) {
    displayError(inputElement, errorMessage);
    return false;
  } else {
    removeError(inputElement);
    return true;
  }
}

// Usage example:
const firstNameInput = document.getElementById("firstName");
firstNameInput.addEventListener("input", () => {
  validateInput(
    firstNameInput,
    (value) => value !== "", // Example validation function (non-empty)
    "First Name cannot be empty"
  );
});

const lastNameInput = document.getElementById("lastName");
lastNameInput.addEventListener("input", () => {
  validateInput(
    lastNameInput,
    (value) => value !== "", // Example validation function (non-empty)
    "Last Name cannot be empty"
  );
});

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", () => {
  validateInput(emailInput, isValidEmail, "Looks like this is not an email");
});

const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
  validateInput(
    passwordInput,
    (value) => value !== "", // Example validation function (non-empty)
    "Password cannot be empty"
  );
});

// Function to validate the form on submission
function validateForm(event) {
  event.preventDefault();

  const inputFields = document.querySelectorAll("input");
  let allInputsValid = true;

  inputFields.forEach((input) => {
    if (
      !validateInput(input, (value) => value !== "", "Field cannot be empty")
    ) {
      allInputsValid = false;
    }
  });

  if (allInputsValid) {
    // If all inputs are valid, show an alert
    alert("All inputs are valid! Form can be submitted.");
  }
}

// Add a submit event listener to the form to trigger form validation
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
