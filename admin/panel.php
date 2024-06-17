<?php
header('Content-type: text/html; charset=utf-8');
session_start();
if (!$_SESSION['admin']) {
    header('Location: login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Админ-панель</title>
    <script src="https://cdn.canvasjs.com/ga/canvasjs.min.js" defer></script>
    <style>
        .chart {
            width: 500px;
            height: 370px;
        }

        .container1 {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
        }

        .container2 {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
        }

        @media screen and (max-width: 640px) {
            .chart {
                width: 400px;
                height: 180px;
            }

            .container1 {
                flex-wrap: wrap;
            }

            .container2 {
                flex-wrap: wrap;
            }
        }
    </style>
</head>
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
    $arrayItem1 = array('label' => $label, 'y' => $row['Games']);
    $arrayItem2 = array('label' => $label, 'y' => $row['Wins']);
    $arrayItem3 = array('label' => $label, 'y' => $row['Defeats']);
    $arrayItem4 = array('label' => $label, 'y' => $row['Games'] - $row['Wins'] - $row['Defeats']);
    $arrayItem5 = array('label' => $label, 'y' => round($row['Wins'] / $row['Games'] * 100));
    $arrayItem6 = array('label' => $label, 'y' => round($row['Defeats'] / $row['Games'] * 100));
    $dataPoints1[] = $arrayItem1;
    $dataPoints2[] = $arrayItem2;
    $dataPoints3[] = $arrayItem3;
    $dataPoints4[] = $arrayItem4;
    $dataPoints5[] = $arrayItem5;
    $dataPoints6[] = $arrayItem6;
}

$db->close();
?>
<script>
    window.onload = function () {
        const chart1 = new CanvasJS.Chart('chartContainer1', {
            animationEnabled: true,
            title: {
                text: 'Сыгранных игр:',
                fontColor: "#6A5ACD"
            },
            data: [{
                type: 'pie',
                indexLabel: '{label} — {y}',
                dataPoints: <?php echo json_encode($dataPoints1, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart1.render();

        const chart2 = new CanvasJS.Chart('chartContainer2', {
            animationEnabled: true,
            title: {
                text: 'Побед:',
                fontColor: "#6A5ACD"
            },
            data: [{
                type: 'pie',
                indexLabel: '{label} — {y}',
                dataPoints: <?php echo json_encode($dataPoints2, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart2.render();

        const chart3 = new CanvasJS.Chart('chartContainer3', {
            animationEnabled: true,
            title: {
                text: 'Поражений:',
                fontColor: "#6A5ACD"
            },
            data: [{
                type: 'pie',
                indexLabel: '{label} — {y}',
                dataPoints: <?php echo json_encode($dataPoints3, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart3.render();

        const chart4 = new CanvasJS.Chart('chartContainer4', {
            animationEnabled: true,
            title: {
                text: 'Незаконченных игр:',
                fontColor: "#6A5ACD"
            },
            data: [{
                type: 'pie',
                indexLabel: '{label} — {y}',
                dataPoints: <?php echo json_encode($dataPoints4, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart4.render();

        const chart5 = new CanvasJS.Chart('chartContainer5', {
            animationEnabled: true,
            title: {
                text: 'Процент побед:',
                fontColor: "#6A5ACD"
            },
            data: [{
                type: 'pie',
                indexLabel: '{label} — {y}%',
                dataPoints: <?php echo json_encode($dataPoints5, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart5.render();

        const chart6 = new CanvasJS.Chart('chartContainer6', {
            animationEnabled: true,
            title: {
                text: 'Процент поражений:',
                fontColor: "#6A5ACD"
            },
            data: [{
                type: 'pie',
                indexLabel: '{label} — {y}%',
                dataPoints: <?php echo json_encode($dataPoints6, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart6.render();
    }
</script>
<section class="container1">
    <div class="chart" id="chartContainer1"></div>
    <div class="chart" id="chartContainer2"></div>
    <div class="chart" id="chartContainer3"></div>
</section>
<section class="container2">
    <div class="chart" id="chartContainer4"></div>
    <div class="chart" id="chartContainer5"></div>
    <div class="chart" id="chartContainer6"></div>
</section>
</body>
</html>
