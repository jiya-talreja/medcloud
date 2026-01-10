document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("eventsModal");
  const openBtn = document.getElementById("openEvents");
  const closeBtn = document.querySelector(".close-btn");

  // Open modal
  openBtn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "flex";
  }

  // Close modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // Close when clicking outside the modal
  window.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

  // List of valid users
  const validUsers = [
    { username: "jiya@gmail.com", password: "jiya123", name: "Jiya" },
    { username: "manya@gmail.com", password: "manya123", name: "Manya" },
    { username: "sam@gmail.com", password: "sameera123", name: "Sameera" },
    
  ];

  // Handle login
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let un = document.getElementById("username").value.trim();
    let pw = document.getElementById("password").value.trim();

    // Check if fields are empty
    if (un === "" || pw === "") {
      document.getElementById("error-message").innerText = " Please enter both username and password.";
      document.getElementById("signup-suggestion").style.display = "none";
      return;
    }

    // Find matching user
    const user = validUsers.find(u => u.username === un && u.password === pw);

    if (user) {
      // Successful login
      document.getElementById("error-message").innerText = "";
      document.getElementById("signup-suggestion").style.display = "none";
      localStorage.setItem("username", user.name);
      window.location.href = "2getsymp.html";
    } else {
      // Invalid login
      document.getElementById("error-message").innerText = " Invalid username or password.";
      document.getElementById("signup-suggestion").style.display = "block";
    }
  });

  // Redirect function for signup
  window.goToSignup = function() {
    window.location.href = "formm.html";
  }
});
