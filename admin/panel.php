<?php
header('Content-type: text/html; charset=utf-8');
session_start();
if (! $_SESSION['admin']) {
    header('Location: login.php');
}
?>
<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Админ-панель</title>
    <script src="../libs/canvasjs/http_canvasjs.com_assets_script_canvasjs.min.js" defer></script>
<body>
<?php
$db = new SQLite3('../db/main.db');
$res = $db->query('SELECT * FROM statistics');

$dataPoints = [];

while ($row = $res->fetchArray()) {
    switch ($row['Name']) {
        case 'Noble':
            $label = 'Дворянин';
            break;
        case 'Trader':
            $label = 'Купец';
            break;
        case 'Worker':
            $label = 'Рабочий';
            break;
        case 'Farmer':
            $label = 'Крестьянин';
            break;
    }
    $arrayItem = array('label' => $label, 'y' => $row['Games']);
    $dataPoints[] = $arrayItem;
}

$db->close();
?>
<script>
    window.onload = function() {
        const chart = new CanvasJS.Chart('chartContainer', {
            animationEnabled: true,
            title: {text: 'Диаграмма сыгранных игр'},
            data: [{
                type: 'pie',
                indexLabel: '{label} - {y}',
                dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart.render();
    }
</script>
<div id="chartContainer" style="height: 370px; width: 500px;"></div>
</body>
</html>
