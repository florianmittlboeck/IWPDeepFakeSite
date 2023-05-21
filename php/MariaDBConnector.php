<?php
// Database connection details
$servername = 'localhost';
$username = 'InfoDeepFake';
$password = 'Linihlrf.KHOC9FV';
$dbname = 'InfoDeepFake';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    echo 'Connected successfully'; // Log a success message
}

// Retrieve data from the database
$query = 'SELECT * FROM InfoBlocks';
$result = $conn->query($query);

// Prepare the result as an array
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo 'No data found'; // Log a message if no data is found
}

// Close the database connection
$conn->close();

// Send the JSON response
header('Content-Type: application/json');
echo json_encode($data);
?>
