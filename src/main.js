import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './js/refs';
import { markupGallery } from './js/markupGallery';
import { serchPictureGallery } from './services/api';

refs.loader.style.display = 'none';

refs.form.addEventListener('submit', onButtonClick);

async function onButtonClick(event) {}

// function onButtonClick(evt) {
//   evt.preventDefault();

//   refs.ulContainer.innerHTML = '';
//   refs.loader.style.display = 'block';

//   const form = evt.currentTarget;
//   const input = form.elements.text.value;

//   serchPictureGallery(input)
//     .then(data => {
//       refs.loader.style.display = 'none';
//       const pictures = data.hits;
//       let markup = '';

//       for (const elem of pictures) {
//         markup += markupGallery(elem);
//       }

//       if (data.hits.length === 0) {
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//           backgroundColor: '#EF4040',
//           color: '#FAFAFB',
//         });
//       }

//       refs.ulContainer.innerHTML = markup;

//       const lightbox = new SimpleLightbox('.list_gallery a', {
//         caption: true,
//         captionsData: 'alt',
//         captionPosition: 'bottom',
//         captionDelay: 250,
//       });
//       lightbox.refresh();
//     })
//     .catch(error => {
//       console.log(error);
//       refs.loader.style.display = 'none';
//     })
//     .finally(() => {
//       form.reset();
//     });
// }
