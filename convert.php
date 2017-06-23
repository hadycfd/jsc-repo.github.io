<?php
$text = "Cara Membuat Pencarian Lokasi Pada Google Maps Menggunakan PHP dan MySQL";


$e = explode(" ", $text);
$i = implode($e, "-");
echo strtolower($i);

?>