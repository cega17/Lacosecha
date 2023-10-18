// Obtén todos los elementos de la galería
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryImages = document.querySelectorAll('.gallery-item img');

// Agrega un manejador de eventos a cada elemento de la galería
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Crea un elemento modal para mostrar la imagen en tamaño completo
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImage = document.createElement('img');
    modalImage.src = galleryImages[index].src;
    modalImage.alt = galleryImages[index].alt;
    modal.appendChild(modalImage);
    
    // Agrega el modal al cuerpo del documento
    document.body.appendChild(modal);
    
    // Cierra el modal cuando se hace clic en él
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
