<?php

if (isset($_POST['action']) && $_POST['action'] == 'update') {
    $db = new SQLite3('./main.db');
    $query = "UPDATE statistics SET Games = Games + 1 WHERE Name = 'Trader'";
    $db->exec($query);

    echo "Данные обновлены.";

    $db->close();
}

if (isset($_POST['action']) && $_POST['action'] == 'defeat') {
    $db = new SQLite3('./main.db');
    $query = "UPDATE statistics SET Defeats = Defeats + 1 WHERE Name = 'Trader'";
    $db->exec($query);

    echo "Данные обновлены.";

    $db->close();
}

if (isset($_POST['action']) && $_POST['action'] == 'win') {
    $db = new SQLite3('./main.db');
    $query = "UPDATE statistics SET Wins = Wins + 1 WHERE Name = 'Trader'";
    $db->exec($query);

    echo "Данные обновлены.";

    $db->close();
}