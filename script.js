function handleSignIn(event) {
  event.preventDefault(); // Prevent the form from submitting in default way

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  fetch('https://script.google.com/macros/s/AKfycbwuH-Am4YAV9UZFcQ5JSX5QmtOsgGsfCrCPwerfxFiFAKBNCYC_9GdwrqID2Cfnr2q_/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('error').innerText = '';
      window.location.href = 'https://techcoderyorktown.github.io'; // Replace with your desired redirect URL after successful login
    } else {
      document.getElementById('error').innerText = 'Invalid username or password.';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('error').innerText = 'An error occurred. Please try again.';
  });
}
