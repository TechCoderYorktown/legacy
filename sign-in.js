function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

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
});
