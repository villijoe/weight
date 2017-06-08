<?php
/**
 * Created by PhpStorm.
 * User: Orion
 * Date: 27.03.2016
 * Time: 10:03
 */

$pdo = new PDO("mysql:host=localhost;dbname=myweight", "root", "") or die("no db connect");

if ($_GET['method'] == "data") {
    $query = 'SELECT * FROM weights ORDER BY date';
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $dates = $weights = [];
    foreach ($stmt as $row) {
        array_push($weights, $row['weight']);
        array_push($dates, $row['date']);
    }
    $weight_json = json_encode($weights);
    $date_json = json_encode($dates);
    echo $weight_json;
    echo $date_json;
    //print_r($weights);
}