<?php
$login = $_POST['username'];
(string)$pass = $_POST['password'];
$db = new SQLite3('../db/main.db');
$hashedPassword = $db->query('SELECT password FROM admin');
$db->close();
if ($login == 'sokmMain' && password_verify($pass, $hashedPassword)) {
    session_start();
    $_SESSION['admin'] = true;
    $script = 'panel.php';
}
else {
    $script = 'login.html';
}
header("Location: $script");
