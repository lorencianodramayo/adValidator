<?php
header('Content-type: application/json');
	// Include and initialize ZipArchive class
	require_once 'ZipArchiver.class.php';
	$zipper = new ZipArchiver;

	// Path of the directory to be zipped
	$dirPath = $_POST['pathdir'];

	// Path of output zip file
	$zipPath = $_POST['pathdir'].'.zip';

	// Create zip archive
	$zip = $zipper->zipDir($dirPath, $zipPath);

	if($zip){
	  echo filesize($zipPath);
	}else{
	  echo 'Failed to create ZIP.';
	}
?>