<?php
session_start();

$users = [
    'user1' => 'password1',
    'user2' => 'password2'
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (isset($users[$username]) && $users[$username] === $password) {
        $_SESSION['username'] = $username;
        header('Location: protected_page.php');
        exit();
    } else {
        echo '<p>Invalid username or password.</p>';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="sign-in-container">
        <h1>Sign In</h1>
        <form action="authenticate.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            
            <button type="submit">Sign In</button>
        </form>
        <?php if (isset($error)) { echo '<p style="color:red;">'.$error.'</p>'; } ?>
    </div>
</body>
</html>
