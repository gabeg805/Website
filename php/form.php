<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: GabeGonzalez.me';
$to = 'gabe@gabegonzalez.me';
$subject = 'Email Inquiry';

$body = "From: $name\nE-Mail: $email\n\n$message";

if ($_POST['submit']) {
    if ( mail($to, $subject, $body, $from) ) {
        header("Location: ../home.html");
        exit;
    } else {        
        echo '<p>Oops! An error occurred. Try sending your message again.</p>';
    }
} else {
    echo '<p>Oops! An error occurred. Try sending your message again.</p>';
}
?>