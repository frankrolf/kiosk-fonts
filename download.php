<?php
$download_dir = "freefonts";
$counter_dir = "counters";
$filename = $_GET['filename'];

$path = $download_dir."/".$filename;

if (file_exists($path)) {
$file = fopen($counter_dir."/".$filename.".txt", "r+");
$count = fread($file, 100);
fclose($file);

$count++;

$file = fopen($counter_dir."/".$filename.".txt", "w");
fwrite($file, $count);
fclose($file);


$size = filesize($path);

header("Content-type: application/octet-stream");
header("Content-disposition: attachment; filename=".$filename);
header("Content-length: ".$size);


readfile($path);
exit();
}
?>