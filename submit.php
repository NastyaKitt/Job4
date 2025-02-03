<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $tel = trim($_POST['tel']);

    if (empty($tel)) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }

    $to = "pochta@gmail.com";
    $subject = "Новая заявка с сайта";

    $message .= "Телефон: $tel\n";

    $headers = "From: no-reply@yourdomain.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Ваше сообщение отправлено!";
    } else {
        echo "Ошибка отправки сообщения. Пожалуйста, попробуйте позже.";
    }
} else {
    echo "Некорректный запрос.";
}
?>