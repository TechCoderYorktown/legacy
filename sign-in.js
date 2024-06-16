function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

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
      // Redirect to home.html if the criteria match
      window.location.href = "https://techcoderyorktown.github.io/home.html";
    } else {
      // Simulate an error message
      setFormMessage(loginForm, "error", "Invalid username/password combination");
    }
  });

  });
});
