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

function validateForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((input) => removeError(input));

  if (firstName === "") {
    displayError(
      document.getElementById("firstName"),
      "First Name cannot be empty"
    );
  }

  if (lastName === "") {
    displayError(
      document.getElementById("lastName"),
      "Last Name cannot be empty"
    );
  }

  if (!isValidEmail(email)) {
    displayError(
      document.getElementById("email"),
      "Looks like this is not an email"
    );
  }

  if (password === "") {
    displayError(
      document.getElementById("password"),
      "Password cannot be empty"
    );
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
