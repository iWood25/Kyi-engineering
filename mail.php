<?php

$frm_name  = "Youname";
$recepient = "petr.ryabokon@gmail.com";
$sitename  = "Кий инжиниринг";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$form_message = trim($_POST["message"]);
$form_name = trim($_POST["formname"]);

$message = "
Форма: $form_name <br>
Имя: $name <br>
Телефон: $phone <br>
email: $email <br>
Сообщение: $form_message
"

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
