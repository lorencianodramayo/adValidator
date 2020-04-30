<?php 
	header('Content-type: application/json');
	//blue host
	/*$servername = "ad-weave.io";
	$username = "kzixcymy_db_u";
	$password = "@Whitfield43";
	$dbname = "kzixcymy_db";*/
	//local
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "adValidator";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
?>