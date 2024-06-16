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

  // Check if the user is logged in
  if (localStorage.getItem('isLoggedIn') === 'true') {
    updateUsernameInNavbar(); // Update username in navbar if logged in
    document.body.classList.remove('hidden'); // Show body content
  } else {
    // Redirect to login page if not logged in
    window.location.href = "https://techcoderyorktown.github.io/index.html";
  }

  // Login form submit event listener
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Extract user input values
      const username = loginForm.querySelector("#Username").value;
      const password = loginForm.querySelector("#Password").value;

      // Check if the input matches specific criteria (example criteria)
      if (username === "bob" && password === "1234") {
        // Set flags in localStorage to indicate the user is logged in
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        // Redirect to home.html if the criteria match
        window.location.href = "https://techcoderyorktown.github.io/home.html";
      } else {
        // Simulate an error message
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
      // Redirect to login page after logout
      window.location.href = "https://techcoderyorktown.github.io/index.html";
    });
  }
});
