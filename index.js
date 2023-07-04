// Get form elements
const formContainer = document.getElementById('form-container');
const emailForm = document.getElementById('email-form');
const successMessage = document.getElementById('success-message');
const backButton = document.getElementById('back-button');
const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email-input');

const receivedEmailValue = document.getElementById('received-email');


// Show success message and hide form
emailForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  if (isValidEmail(emailInput.value)) {
    const enteredEmail = emailInput.value;
    successMessage.classList.remove('hide');
    formContainer.classList.add('hide');
    errorMessage.classList.add('hide');

    receivedEmailValue.textContent = enteredEmail;

  } else {
    errorMessage.classList.remove('hide');
    emailInput.style.backgroundColor = "rgb(253, 200, 200)";
    emailInput.style.border = "1px solid rgb(255,92,92)";
  }
});

// Revert back to form when the back button is clicked
backButton.addEventListener('click', function () {
  successMessage.classList.add('hide');
  formContainer.classList.remove('hide');
});

// Validate email address using a regular expression
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
