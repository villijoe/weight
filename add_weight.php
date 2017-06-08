<?php
/**
 * Created by PhpStorm.
 * User: Orion
 * Date: 31.03.2016
 * Time: 15:25
 */
$pdo = new PDO("mysql:host=localhost;dbname=myweight", "root", "") or die("no db connect");

$query = "SELECT * FROM weights WHERE date = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$_POST['date']]);
foreach($stmt as $row) {
    echo $row['date'];
    if ($row['date']) {
        //echo 'hi';
        header("Location: index.php");
        exit();
    }
}

$query = "INSERT INTO weights(`date`, `weight`) VALUES(?, ?)";
$stmt = $pdo->prepare($query);
//echo $_POST['date'];
$weight = (float) $_POST['weight'];;
$stmt->execute([$_POST['date'], $weight]);
header("Location: index.php");