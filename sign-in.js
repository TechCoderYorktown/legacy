document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");

  // Function to set form message
  function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
  }

  // Function to update username in navbar
  function updateUsernameInNavbar() {
    const username = localStorage.getItem('username');
    if (username) {
      const dropbtn = document.querySelector(".username .dropbtn");
      if (dropbtn) {
        dropbtn.textContent = username;
      }
    }
  }

  // Function to handle session expiration
  function checkSessionExpiration() {
    const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes
    const lastActivityTime = parseInt(localStorage.getItem('lastActivityTime'), 10) || Date.now();
    const currentTime = Date.now();

    if (currentTime - lastActivityTime > SESSION_TIMEOUT_MS) {
      // Session expired, clear localStorage and redirect
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('lastActivityTime');
      window.location.href = "https://techcoderyorktown.github.io/index.html";
    } else {
      // Update last activity time only if session is still valid
      localStorage.setItem('lastActivityTime', currentTime.toString());
    }
  }

  // Check session expiration periodically
  setInterval(checkSessionExpiration, 1000 * 60); // Check every minute

  // Check if the user is logged in
  if (localStorage.getItem('isLoggedIn') === 'true') {
    updateUsernameInNavbar(); // Update username in navbar if logged in
    document.body.classList.remove('hidden'); // Show body content
  } else if (!loginForm) {
    // Redirect to login page if not logged in and not on login page
    window.location.href = "https://techcoderyorktown.github.io/index.html";
  }

  // Login form submit event listener
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Extract user input values
      const username = loginForm.querySelector("#Username").value;
      const password = loginForm.querySelector("#Password").value;

      // Perform basic validation (e.g., check if fields are not empty)
      if (username.trim() === "" || password.trim() === "") {
        setFormMessage(loginForm, "error", "Username and password are required");
        return;
      }

      // Example of checking credentials (replace with your actual authentication logic)
      if (username === "bob" && password === "1234") {
        // Set flags in localStorage to indicate the user is logged in
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('lastActivityTime', Date.now().toString()); // Record login time
        // Redirect to home.html if the criteria match
        window.location.href = "https://techcoderyorktown.github.io/home.html";
      } else {
        // Simulate an error message for invalid credentials
        setFormMessage(loginForm, "error", "Invalid username/password combination");
      }
    });
  }

  // Logout button click event listener
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      // Clear localStorage to logout the user
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('lastActivityTime');
      // Redirect to login page after logout
      window.location.href = "https://techcoderyorktown.github.io/index.html";
    });
  }
});
