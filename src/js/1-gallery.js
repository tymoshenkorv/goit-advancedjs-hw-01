console.log('Gallery');
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(SimpleLightbox);
new SimpleLightbox('.gallery-link', {
  overlay: true,
  captionsData: 'alt',
  captionDelay: 250,
});
