import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './js/refs';
import { markupGallery } from './js/markupGallery';
import { serchPictureGallery } from './services/api';
import { buttonLoadMore } from './services/buttonLoadMore';

const pageSizeParams = {
  page: 1,
  maxPage: 0,
  pageSize: 40,
};

refs.loader.style.display = 'none';

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  refs.ulContainer.innerHTML = '';
  refs.loader.style.display = 'block';
  const form = event.currentTarget;
  const input = form.elements.text.value.trim();

  try {
    const { hits } = await serchPictureGallery(input);
    console.log(hits);
    refs.loader.style.display = 'none';

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        color: '#FAFAFB',
      });
    }

    if (!input) {
      iziToast.error({
        message: 'Sorry, you have not entered anything!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        color: '#FAFAFB',
      });
      return;
    }

    refs.ulContainer.innerHTML = markupGallery(hits);

    const lightbox = new SimpleLightbox('.list_gallery a', {
      caption: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();

    if (hits.length > 0 && hits.length !== totalResults) {
      buttonLoadMore.show(refs.buttonLoadMore);
      refs.buttonLoadMore.addEventListener('click', onButtonLoadMoreClick);
    } else {
      buttonLoadMore.hide(refs.buttonLoadMore);
    }
  } catch (error) {
    console.log(error);
    refs.loader.style.display = 'none';
  } finally {
    form.reset();
  }
}

async function onButtonLoadMoreClick() {
  pageSizeParams.page += 1;
  buttonLoadMore.disable(buttonLoadMore);
}
