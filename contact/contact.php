
<?php
$errors = [];

if (!array_key_exists('nom', $_POST) || $_POST['nom'] == '') {
	$errors['nom'] = '<i class="material-icons">&#xE002;</i>'." Merci de renseigner votre nom";
}
if (!array_key_exists('email', $_POST) || $_POST['email'] == '' || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	$errors['email'] = '<i class="material-icons">&#xE5CA;</i>'." Merci de renseigner une adresse mail valide";
}
if (!array_key_exists('message', $_POST) || $_POST['message'] == '') {
	$errors['message'] = '<i class="material-icons">&#xE5CA;</i>'." Votre message est vide";
}

session_start();

if(!empty($errors)){
	$_SESSION['errors'] = $errors;
	$_SESSION['inputs'] = $_POST;
	header('Location: index.php');
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
	$headers = 'De la part de';
	mail('projetlui@gmail.com', 'Formulaire de contact', $formcontent, $headers);
	header('Location: index.php');
}
