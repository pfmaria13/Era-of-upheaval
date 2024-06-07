<?php

if (isset($_POST['action']) && $_POST['action'] == 'update') {
    $db = new SQLite3('./main.db');
    $query = "UPDATE statistics SET Games = Games + 1 WHERE Name = 'Noble'";
    $db->exec($query);

    echo "Данные обновлены.";

    $db->close();
}