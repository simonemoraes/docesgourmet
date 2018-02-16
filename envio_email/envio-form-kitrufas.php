<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$nome = $request->nome;
$telefone = $request->telefone;
$email = $request->email;
$mensagem = $request->mensagem;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");

//site para envio de mensagem: github.com/PHPMailer/PHPMailer
require_once("arquivosEnvioEmail/PHPMailerAutoload.php");

$emailContato = (
    "<!doctype html>"
    ."<html lang='pt-br'>"
    ."<head>"
    ."<meta charset='utf-8>"
    ."<meta name='viewport' content='width=device-width, initial-scale=1'>"
    ."</head>"
    ."<body>"
    ."<div class='row'>"
    . "<div class='col-sm-6 col-md-6'>"
    . "<div class='panel panel-primary'>"
    . "<div class='panel-heading'>"
    . "<h3>Email de Contato</h3>"
    . "</div>"
    . "<div class='panel-body'>"
    . "<p><strong>Nome:&nbsp;&nbsp;</strong>{$nome}</p>"
    . "<p><strong>Telefone:&nbsp;&nbsp;</strong>{$telefone}</p>"
    . "<p><strong>Email:&nbsp;&nbsp;</strong>{$email}</p>"
    . "<p><strong>Mensagem:&nbsp;&nbsp;</strong>{$mensagem}</p>"
    . "</div>"
    ."</div>"
    ."</div>"
    ."</div>"
    ."</body>"
    ."</html>");


$mail = new PHPMailer();
$mail->isSMTP();
//$mail->Mailer ='smtp';
$mail->Host = 'mail.kitrufas.com.br';
$mail->Port = 587;
$mail->SMTPSecure = '';
$mail->SMTPAuth = true;
$mail->Username = "enviamensagem@kitrufas.com.br";
$mail->Password = "42301886";

$mail->IsHTML(true);
$mail->setFrom($email, $nome);
$mail->addAddress("contato@kitrufas.com.br");
$mail->Subject = "Formulario do kitrufas";
$mail->Body = ($emailContato);

//$mail->html2text($emailContato,true);
$mail->AltBody = "de: {$nome}\ntelefone: {$telefone}\nemail: {$email}\nmensagem: {$mensagem}";

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

if($mail->send()){
echo json_encode("sucesso");
// header("Location: index.php");
}else{
echo json_encode("erro". $mail->ErrorInfo);
///header("Location: index.php");
}



