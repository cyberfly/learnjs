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

function validateGovEmail(email) {
  // Regular expression to match emails with:
  // 1. One subdomain before .gov.my
  // 2. One dynamic subdomain before .intan.my
  // 3. One dynamic subdomain before .edu.my
  const pattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(gov\.my|intan\.my|edu\.my)$/;

  return pattern.test(email);
}
