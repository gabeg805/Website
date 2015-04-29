<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: GabeGonzalez.me';
$to = 'gabeg@gabegonzalez.me';
$subject = 'Email Inquiry';

$body = "From: $name\nE-Mail: $email\n\n$message";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) {
        echo 'Thank you for your email!';
    } else {
        echo 'Oops! An error occurred. Try sending your message again.';
    }
}
?>
