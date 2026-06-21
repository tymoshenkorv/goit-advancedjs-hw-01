console.log('Gallery');

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: new URL('../img/thumbs/1.jpg', import.meta.url).href,
    original: new URL('../img/originals/1.jpg', import.meta.url).href,
    description: 'Image 1',
  },
  {
    preview: new URL('../img/thumbs/2.jpg', import.meta.url).href,
    original: new URL('../img/originals/2.jpg', import.meta.url).href,
    description: 'Image 2',
  },
  {
    preview: new URL('../img/thumbs/3.jpg', import.meta.url).href,
    original: new URL('../img/originals/3.jpg', import.meta.url).href,
    description: 'Image 3',
  },
  {
    preview: new URL('../img/thumbs/4.jpg', import.meta.url).href,
    original: new URL('../img/originals/4.jpg', import.meta.url).href,
    description: 'Image 4',
  },
  {
    preview: new URL('../img/thumbs/5.jpg', import.meta.url).href,
    original: new URL('../img/originals/5.jpg', import.meta.url).href,
    description: 'Image 5',
  },
  {
    preview: new URL('../img/thumbs/6.jpg', import.meta.url).href,
    original: new URL('../img/originals/6.jpg', import.meta.url).href,
    description: 'Image 6',
  },
  {
    preview: new URL('../img/thumbs/7.jpg', import.meta.url).href,
    original: new URL('../img/originals/7.jpg', import.meta.url).href,
    description: 'Image 7',
  },
  {
    preview: new URL('../img/thumbs/8.jpg', import.meta.url).href,
    original: new URL('../img/originals/8.jpg', import.meta.url).href,
    description: 'Image 8',
  },
  {
    preview: new URL('../img/thumbs/9.jpg', import.meta.url).href,
    original: new URL('../img/originals/9.jpg', import.meta.url).href,
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
