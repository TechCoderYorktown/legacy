function handleSignIn(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // You can replace this with your server-side authentication endpoint
  var url = 'https://your-backend-endpoint.com/login';

  // Example of how you might handle the response from the server
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('error').innerText = '';
      window.location.href = 'https://techcoderyorktown.github.io'; // Redirect after successful login
    } else {
      document.getElementById('error').innerText = 'Invalid username or password.';
    }
  })
  .catch(error => {
    document.getElementById('error').innerText = 'An error occurred. Please try again.';
    console.error('Error:', error);
  });
}
