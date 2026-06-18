console.log('Gallery');

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: '../img/thumbs/1.jpg',
    original: '../img/originals/1.jpg',
    description: 'Image 1',
  },
  {
    preview: '../img/thumbs/2.jpg',
    original: '../img/originals/2.jpg',
    description: 'Image 2',
  },
  {
    preview: '../img/thumbs/3.jpg',
    original: '../img/originals/3.jpg',
    description: 'Image 3',
  },
  {
    preview: '../img/thumbs/4.jpg',
    original: '../img/originals/4.jpg',
    description: 'Image 4',
  },
  {
    preview: '../img/thumbs/5.jpg',
    original: '../img/originals/5.jpg',
    description: 'Image 5',
  },
  {
    preview: '../img/thumbs/6.jpg',
    original: '../img/originals/6.jpg',
    description: 'Image 6',
  },
  {
    preview: '../img/thumbs/7.jpg',
    original: '../img/originals/7.jpg',
    description: 'Image 7',
  },
  {
    preview: '../img/thumbs/8.jpg',
    original: '../img/originals/8.jpg',
    description: 'Image 8',
  },
  {
    preview: '../img/thumbs/9.jpg',
    original: '../img/originals/9.jpg',
    description: 'Image 9',
  },
];

const gallery = document.querySelector('.gallery');

gallery.innerHTML = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `
  )
  .join('');

console.log(SimpleLightbox);
new SimpleLightbox('.gallery-link', {
  overlay: true,
  captionsData: 'alt',
  captionDelay: 250,
});
