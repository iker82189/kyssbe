// Función para abrir WhatsApp con el producto seleccionado
function contactarWhatsApp(producto) {
    // Crea el mensaje con el nombre del producto
    const mensaje = ¡Hola! Estoy interesado en comprar el siguiente producto: ${producto}.;
    
    // Enlace de WhatsApp con el mensaje predefinido
    const whatsappUrl = https://wa.me/34623437426?text=${encodeURIComponent(mensaje)};
    
    // Redirige al enlace de WhatsApp
    window.open(whatsappUrl, "_blank");
  }