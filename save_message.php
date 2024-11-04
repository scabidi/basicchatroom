<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $message = $_POST["message"];
    $file = fopen("chat.txt", "a");
    fwrite($file, "<p><strong>$name:</strong> $message</p>\n");
    fclose($file);
}
?>
