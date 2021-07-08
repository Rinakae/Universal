<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$select = $_POST['select'];
$message = $_POST['message'];
$email = $_POST['email'];
$checkbox = $_POST['checkbox'];
$comment = $_POST['comment'];


// Формирование самого письма
$title = "Новая заявка";
$body = "
<h2>Обращение</h2>
<b>Тема письма:</b> $select<br>
<b>Сообщение:</b> $message<br><br>
<b>Адрес почты:</b> $email<br><br>
<b>Согласен с обработкой данных:</b> $checkbox<br><br>
<b>Комментарий:</b><br>$comment
";



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'katgu9277@gmail.com'; // Логин на почте
    $mail->Password   = '949829632lohi'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('katgu9277@gmail.com', 'Kat Gu'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('simi1993@mail.ru');     

 
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;    
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');