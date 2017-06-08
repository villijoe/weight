<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MyWeight</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
</head>
<body>
<div id="container" style="min-width: 310px; height: 700px; margin: 0 auto"></div>

<?php
$pdo = new PDO("mysql:host=localhost;dbname=myweight", "root", "") or die("no db connect");
$query = 'SELECT date FROM weights';
$stmt = $pdo->prepare($query);
$stmt->execute();
$form = false;
foreach ($stmt as $row) {
    if ($row['date'] == date("Y-m-d")) {
        $form = true;
    }
}
if (!$form) {
    require_once "form_template.php";
} // else { require_once "form_template.php"; }
?>


<script src="ajax.js"></script>
<script src="graph.js"></script>
<script src="field.js"></script>
</body>
</html>