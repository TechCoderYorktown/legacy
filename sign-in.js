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
      // Redirect to home.html if the criteria match
      window.location.href = "https://techcoderyorktown.github.io/home.html";
    } else {
      // Simulate an error message
      setFormMessage(loginForm, "error", "Invalid username/password combination");
    }
  });

  // Simulate getting the username from a session or cookie
  const username = "Your_Actual_Username"; // Replace with actual logic to get the username

  // Set the username in the dropdown if applicable
  const dropbtn = document.querySelector(".username .dropbtn");
  if (dropbtn) {
    dropbtn.textContent = username;
  }

  // Handle logout
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      // Perform logout operations like clearing session or cookies if needed
      alert("Logged out successfully");
      // Redirect to the login page
      window.location.href = "login.html";
    });
  }
});
