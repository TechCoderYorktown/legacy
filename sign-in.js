document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");

  // Function to set form message
  function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
  }

  // Handle form submission
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
        // Redirect to home.html or another authenticated page
        window.location.href = "https://techcoderyorktown.github.io/home.html";
      } else {
        // Simulate an error message for invalid credentials
        setFormMessage(loginForm, "error", "Invalid username/password combination");
      }
    });
  }
});
