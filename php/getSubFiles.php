<?php
header('Content-type: application/json');
echo json_encode(scandir($_POST['dirPath']));
?>