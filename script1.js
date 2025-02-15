const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  usernameField = form.querySelector(".username-field"),
  usernameInput = usernameField.querySelector(".username"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// Name Validation
function checkname() {
  const namePattern = /^(?=.*[a-z])/;
  if (!nameInput.value.match(namePattern)) {
    nameField.classList.add("invalid");
  } else {
    nameField.classList.remove("invalid");
  }
}

// Username Validation
function checkusername() {
  const usernamePattern = /^[a-z]{2,3}$/; // Adjusted regex pattern
  if (!usernameInput.value.match(usernamePattern)) {
    usernameField.classList.add("invalid");
  } else {
    usernameField.classList.remove("invalid");
  }
}

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailField.classList.add("invalid");
  } else {
    emailField.classList.remove("invalid");
  }
}

// Password Validation
function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    passField.classList.add("invalid");
  } else {
    passField.classList.remove("invalid");
  }
}

// Confirm Password Validation
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    cPassField.classList.add("invalid");
  } else {
    cPassField.classList.remove("invalid");
  }
}

// Attach validation listeners on keyup (Fix)
nameInput.addEventListener("keyup", checkname);
usernameInput.addEventListener("keyup", checkusername);
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);

// Form Submit Event
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Run validation before checking
  checkname();
  checkusername();
  checkEmail();
  createPass();
  confirmPass();

  // If all fields are valid, proceed with redirection
  if (
    !usernameField.classList.contains("invalid") &&
    !nameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    alert("Signup successful!");
    
    form.reset(); // Reset the form

    // Ensure a slight delay before redirection
    setTimeout(() => {
      window.location.href = "home.html"; // Redirect after 500ms
    }, 500);
  }
});
