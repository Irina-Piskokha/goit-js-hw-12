import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.list_gallery a', {
  caption: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export { lightbox };
//   lightbox.refresh();
