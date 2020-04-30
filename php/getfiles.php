<?php
require_once('dbconnection.php');

$zID = mysqli_real_escape_string($conn, $_POST['zID']);

$sql = 'SELECT * FROM tblZip WHERE zID ="'. $zID. '" ORDER BY zID ASC';

$result = $conn->query($sql);
$response = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
    	$response[] = $row['zipPath'];
    }

    $path = '../upload/'.$response[0];

$dirs = array();

// directory handle
$dir = dir($path);

	while (false !== ($entry = $dir->read())) {
	    if ($entry != '.' && $entry != '..') {
	       if (is_dir($path . '/' .$entry)) {
	            $dirs[] = $response[0].'/'.$entry; 
	       }
	    }
	}

    echo json_encode($dirs);
} else {
    echo "  0 results";
}
$conn->close();     
?>