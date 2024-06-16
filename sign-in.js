function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

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
    const username = loginForm.querySelector("#username").value;
    const password = loginForm.querySelector("#password").value;

    // Check if the input matches specific criteria
    if (username === "bob" && password === "1234") {
      // Redirect to example.com if the criteria match
      window.location.href = "techcoderyorktown.github.io/home.html";
    } else {
      // AJAX/Fetch request to the server (if needed)
      // Simulate an error message
    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });
});

createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Extract user input values
    const username = createAccountForm.querySelector("#username").value;
    const password = createAccountForm.querySelector("#password").value;
    const emailAddress = createAccountForm.querySelector("#emailAddress").value;

    // Check if the input matches specific criteria
    if (username === "XX" && password === "XX") {
      // Redirect to example.com if the criteria match
      window.location.href = "techcoderyorktown.github.io/home.html";
    } else {
      // AJAX/Fetch request to the server (if needed)
      // Simulate success message
      setFormMessage(createAccountForm, "success", "Account created successfully");
    }
  });
});
