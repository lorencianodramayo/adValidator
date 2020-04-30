<?php
require_once('dbconnection.php');

if (isset($_FILES) && !empty($_FILES)) {
    $file = $_FILES['fileName'];
    $name = $file['name'];
    $basepath = $file['tmp_name'];

    if(explode(".", $name)[1] == 'zip')  
           {  
                $getAutoIncrement = "SHOW TABLE STATUS LIKE 'tblZip'";
                $result = $conn->query($getAutoIncrement);
                $response = array();

                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        $response[] = $row['Auto_increment'];
                    }
                }
                
                $key = $response[0];
               $path = '../upload/';  
                $newpath = $path.md5($key);
                $location = $newpath . $name;  
                //move to path
                if(move_uploaded_file($basepath, $location))  
                {  
                    //zip
                     $zip = new ZipArchive;  
                     if($zip->open($location))  
                     {  
                          $zip->extractTo($newpath);  
                          $zip->close();  
                     }  
                     unlink($location); 
                     //inset/upload file to server
                    $saveSql = "INSERT INTO tblZip(zipPath) VALUES('".md5($key)."')";
                        if ($conn->query($saveSql) === true)
                        {
                            echo $key;
                        }
                        $conn->close();
                }
            }  
}
?>
