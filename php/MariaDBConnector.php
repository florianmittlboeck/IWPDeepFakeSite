<?php
function utf8ize($mixed) {
    if (is_array($mixed)) {
        foreach ($mixed as $key => $value) {
            $mixed[$key] = utf8ize($value);
        }
    } elseif (is_string($mixed)) {
        return utf8_encode($mixed);
    }
    return $mixed;
}

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
}

// Retrieve 'lang' from URL parameter, default to 'EN' if not provided
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'EN';

// Sanitize the input to prevent SQL Injection
$lang = $conn->real_escape_string($lang);

// Retrieve data from the database filtered by language
$query = "SELECT * FROM InfoBlocks WHERE sprache = '{$lang}'";

$result = $conn->query($query);

// Prepare the result as an array
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = utf8ize($row);
    }
}

// Close the database connection
$conn->close();

// Send the JSON response
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
echo json_encode($data);

?>
