<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: sign-in.html');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protected Page</title>
</head>
<body>
    <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
    <p>This is a protected page.</p>
    <a href="logout.php">Logout</a>
</body>
</html>
