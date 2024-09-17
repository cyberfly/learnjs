// Function to validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to check if input is numeric
function isNumeric(value) {
  return /^\d+$/.test(value);
}

// Function to check if input is alphanumeric
function isAlphanumeric(value) {
  return /^[a-z0-9]+$/i.test(value);
}
