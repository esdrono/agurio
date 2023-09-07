<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $nombre = $_POST["nombre"];
    $email = $_POST["mail"];
    $whatsapp = $_POST["whatsapp"];
    
    // Recipient email address
    $to = "VENTAS@AGURIO.COM";
    
    // Subject of the email
    $subject = "Contacto desde el sitio web";
    
    // Compose the email message
    $message = "Nombre: $nombre\n";
    $message .= "Email: $email\n";
    $message .= "Whatsapp: $whatsapp\n";
    
    // Set headers
    $headers = "From: $email\r\n";
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Tu mensaje ha sido enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>
