<?php
$to      = 'info@bttalk.pl' . ', ';
$to     .= $_POST['email'];
$subject = 'Brak tematu';
$name    = $_POST['name'];
$email   = $_POST['email'];
$message = $_POST['Wiadomość'];
$headers = 'Wiadomość wysłana z portalu: BTtalk' . '; ' . 'Adres do kontaktu: info@bttalk.pl' . '; ' . "\r\n" .
		   'Nadawca: ' . $_POST['name'] . ', ' . $_POST['email'] . '; ' . "\r\n" .
		   'X-Mailer: PHP/' . phpversion() . "\r\n" ;

mail($to, $subject, $message, $headers);
?>

<html>
<head>
<meta http-equiv="refresh" content="0; URL=index.html#kontakt" />﻿
</head>
<body>
</body>
</html>
