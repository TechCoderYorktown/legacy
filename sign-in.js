document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  // Event listener for "Don't have an account? Create account" link
  document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  // Event listener for "Already have an account? Sign in" link
  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    createAccountForm.classList.add("form--hidden");
    loginForm.classList.remove("form--hidden");
  });

  // Optional: Form submission handling (placeholder)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Placeholder for form submission handling (e.g., validation, AJAX request)
    console.log("Login form submitted!");
  });

  createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Placeholder for form submission handling (e.g., validation, AJAX request)
    console.log("Create account form submitted!");
  });
});
