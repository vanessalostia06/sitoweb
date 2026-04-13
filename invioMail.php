<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die('You cannot access to the page');
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$msg = trim($_POST['message'] ?? '');

$delay = 4;
$url = "https://www.tbtech.it";

if (!$name || !$email || !$msg) {
    echo 'Tutti i campi del modulo sono obbligatori!';
} elseif (!preg_match('/^[A-Za-zÀ-ÿ\s\'-]+$/u', $name)) {
    echo 'Il nome contiene caratteri non ammessi';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Indirizzo email non corretto';
} else {
    $testo = "Nome: " . $name . "\n"
           . "Email: " . $email . "\n"
           . "Messaggio: " . $msg . "\n";

    $headers = "From: noreply@tbtech.it\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mail('vanessa.lostia@tbtech.it', 'Hai ricevuto una mail dal sito web', $testo, $headers);

    echo "<!DOCTYPE html>
<html lang='it'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='refresh' content='{$delay}; url={$url}'>
  <title>Messaggio inviato</title>
</head>
<body>
  <table align='center' border='1' cellpadding='20' cellspacing='0' style='border-color:#CCCCCC; margin-top:40px;'>
    <tr>
      <td>
        <div align='center' style='font-family:Verdana, Arial, Helvetica, sans-serif;'>
          Grazie per averci contattato.<br><br>
          Per tornare alla Home attendi {$delay} secondi o
          <a href='{$url}'>clicca qui</a>.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>";
}
?>