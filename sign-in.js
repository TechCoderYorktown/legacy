document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    createAccountForm.classList.add("form--hidden");
    loginForm.classList.remove("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Extract user input values
    const username = loginForm.querySelector("#Username").value;
    const password = loginForm.querySelector("#Password").value;

    // Check if the input matches specific criteria
    if (username === "bob" && password === "1234") {
      // Redirect to home.html if the criteria match
      window.location.href = "https://techcoderyorktown.github.io/home.html";
    } else {
      // Simulate an error message
      setFormMessage(loginForm, "error", "Invalid username/password combination");
    }
  });
});
