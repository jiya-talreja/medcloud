document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const terms = document.getElementById("terms").checked;
  const gender = document.getElementById("gender").value;
  const bloodGroup = document.getElementById("bloodGroup").value;
  const emergencyContact = document.getElementById("emergencyContact").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = "";

  // Validation
  if (!fname || !lname || !email || !age || !password || !confirmPassword || !gender || !bloodGroup || !emergencyContact) {
    errorMsg.textContent = "⚠️ Please fill in all required fields.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    errorMsg.textContent = "⚠️ Please enter a valid email address.";
    return;
  }

  if (age < 0 || age > 120) {
    errorMsg.textContent = "⚠️ Enter a valid age.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "⚠️ Password must be at least 6 characters long.";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "⚠️ Passwords do not match.";
    return;
  }

  if (emergencyContact.length < 10 || isNaN(emergencyContact)) {
    errorMsg.textContent = "⚠️ Enter a valid emergency contact number.";
    return;
  }

  if (!terms) {
    errorMsg.textContent = "⚠️ Please accept the Terms & Conditions.";
    return;
  }

  // Success message
  alert(`✅ Welcome to MedCloud, ${fname}! Your health record has been securely registered.`);
  document.getElementById("signupForm").reset();
});
