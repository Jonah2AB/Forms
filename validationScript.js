// JavaScript code for form validation


// Function to Check if the input value is alplanumeric and matches the REGEX pattern
function isAlphanumeric(value) {
  return /^[a-z0-9]+$/i.test(value);
}


// Retrieve the input field value and Add event listener to the validate  form that submits an event on submit button
document.getElementById('ValidateBeforeSubmitBtn').addEventListener('click', function () {
  var inputField = document.getElementById('inputField');
  var errorMessage = document.getElementById('errorMessage');



  if (isAlphanumeric(inputField.value)) {
    alert("You're good");

    errorMessage.style.display = 'block';
    // Valid input: display confirmation and submit the form
    document.getElementById('errorMessage').innerHTML = "You're Good!";

  } else {
    alert("Invalid Alphanumeric Characters");

    errorMessage.style.display = 'block';
    // Invalid input: display error message
    document.getElementById('errorMessage').innerHTML = "Alphanumeric Value Required!";
  }
});


