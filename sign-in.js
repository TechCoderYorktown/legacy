document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Extract user input values
    const username = loginForm.querySelector("#Username").value;
    const password = loginForm.querySelector("#Password").value;

    // Check if the input matches specific criteria
    if (username === "bob" && password === "1234") {
      // Set a flag in localStorage to indicate the user is logged in
      localStorage.setItem('isLoggedIn', 'true');
      // Store the username in localStorage
      localStorage.setItem('username', username);
      // Redirect to home.html if the criteria match
      window.location.href = "https://techcoderyorktown.github.io/home.html";
    } else {
      // Simulate an error message
      setFormMessage(loginForm, "error", "Invalid username/password combination");
    }
  });

  // Set the username in the navigation bar dropdown
  const setUsernameInNavbar = () => {
    const username = localStorage.getItem('username');
    if (username) {
      const dropbtn = document.querySelector(".username .dropbtn");
      if (dropbtn) {
        dropbtn.textContent = username;
      }
    }
  };

  // Call the function to set username on page load
  setUsernameInNavbar();

  // Handle logout
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      // Clear localStorage and any other session data
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      // Redirect to the login page
      window.location.href = "login.html";
    });
  }
});
