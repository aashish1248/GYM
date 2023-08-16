<?php
$name = $_POST['name'];
$email = $_POST['email'];
$number = intval($_POST['number']);
$address = $_POST['address'];
$membership = intval($_POST['membership']);
$currentDate = date('Y-m-d');
$expiryDate = date('Y-m-d', strtotime("+$membership months"));

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gym";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$stmt = mysqli_prepare($conn, "INSERT INTO members (`Name`, `Email`, `Phone Number`, `Address`, `Date Joined`, `Membership Expiry Date`) VALUES (?, ?, ?, ?, ?, ?)");
mysqli_stmt_bind_param($stmt, "ssisss", $name, $email, $number, $address, $currentDate, $expiryDate);

if (mysqli_stmt_execute($stmt)) {
  $response = array(
    'success' => true,
    'message' => 'Data inserted successfully',
    'currentDate' => $currentDate,
    'expiryDate' => $expiryDate
  );
} else {
  $response = array(
    'success' => false,
    'message' => 'Error inserting data: ' . mysqli_stmt_error($stmt)
  );
}
mysqli_stmt_close($stmt);
mysqli_close($conn);
?>