
<?php
$errors = [];

if (!array_key_exists('nom', $_POST) || $_POST['nom'] == '') {
	$errors['name'] = '<i class="material-icons">&#xE002;</i>'." Merci de renseigner votre nom";
}
if (!array_key_exists('email', $_POST) || $_POST['email'] == '' || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	$errors['email'] = '<i class="fa fa-warning"></i>'." Merci de renseigner une adresse mail valide";
}
if (!array_key_exists('message', $_POST) || $_POST['message'] == '') {
	$errors['message'] = '<i class="material-icons">&#xE5CA;</i>'." Votre message est vide";
}

session_start();

if(!empty($errors)){
	$_SESSION['errors'] = $errors;
	$_SESSION['inputs'] = $_POST;
	header('Location: index.html');
}else{
	$_SESSION['success'] = 1;
	$nom = $_POST['nom'];
	$mail= $_POST['email'];
    $objet = $_POST['objet'];
	$message = $_POST['message'];
	$formcontent="
	Nom : $nom \n
	Email : $mail \n
    Objet : $objet \n
	Message : $message ";
	$headers = 'FROM: contact@remskei.com';
	mail('r.keignart@gmail.com', 'Formulaire de contact', $formcontent, $headers);
	header('Location: index.html');
}
