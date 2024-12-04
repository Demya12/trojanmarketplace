<?php
// Dummy credentials (replace with database logic later)
$valid_email = "you@company.com";
$valid_username = "username";
$valid_password = "password";

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate user input
    if ($email == $valid_email && $username == $valid_username && $password == $valid_password) {
        // Redirect to the profile page or another page upon successful login
        echo "Welcome, " . htmlspecialchars($username) . "!";
    } else {
        // Error message if the credentials are incorrect
        echo "Invalid credentials. Please try again.";
    }
}
?>

