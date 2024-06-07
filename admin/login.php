<?php
$login = $_POST['username'];
$pass = $_POST['password'];
if ($login == 'admin' && $pass == 'admin') {
    session_start();
    $_SESSION['admin'] = true;
    $script = 'panel.php';
}
else {
    $script = 'login.html';
}
header("Location: $script");