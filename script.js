function handleSignIn(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Replace with your Google Apps Script URL
  var url = 'https://script.google.com/macros/s/AKfycbwuH-Am4YAV9UZFcQ5JSX5QmtOsgGsfCrCPwerfxFiFAKBNCYC_9GdwrqID2Cfnr2q_/exec';

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
      window.location.href = 'https://techcoderyorktown.github.io'; // Replace with your desired redirect URL after successful login
    } else {
      document.getElementById('error').innerText = 'Invalid username or password.';
    }
  })
  .catch(error => {
    document.getElementById('error').innerText = 'An error occurred. Please try again.';
    console.error('Error:', error);
  });
}
