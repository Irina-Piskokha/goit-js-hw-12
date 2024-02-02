import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './js/refs';
import { markupGallery } from './js/markupGallery';
import { serchPictureGallery } from './services/api';
import { buttonLoadMore } from './services/buttonLoadMore';
import { lightbox } from './js/lightbox';

const pageSizeParams = {
  query: '',
  page: 1,
  maxPage: 0,
  per_page: 40,
};

refs.loader.style.display = 'none';

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  refs.ulContainer.innerHTML = '';
  pageSizeParams.page = 1;
  refs.loader.style.display = 'block';
  const form = event.currentTarget;
  pageSizeParams.query = form.elements.text.value.trim();

  if (!pageSizeParams.query) {
    refs.loader.style.display = 'none';
    refs.buttonLoadMore.removeEventListener('click', onButtonLoadMoreClick);
    buttonLoadMore.hide(refs.buttonLoadMore);
    iziToast.error({
      message: 'Sorry, you have not entered anything!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      color: '#FAFAFB',
    });
    return;
  }

  try {
    const { hits, total } = await serchPictureGallery(pageSizeParams);
    pageSizeParams.maxPage = Math.ceil(total / 40);
    refs.loader.style.display = 'none';

    if (hits.length === 0) {
      buttonLoadMore.hide(refs.buttonLoadMore);
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        color: '#FAFAFB',
      });
    }

    refs.ulContainer.innerHTML = markupGallery(hits); // розмітка
    lightbox.refresh();

    if (hits.length > 0 && hits.length !== total) {
      buttonLoadMore.show(refs.buttonLoadMore);
      refs.buttonLoadMore.addEventListener('click', onButtonLoadMoreClick);
    } else {
      buttonLoadMore.hide(refs.buttonLoadMore);
    }
  } catch (error) {
    console.log(error);
    refs.loader.style.display = 'none';
  }
}

async function onButtonLoadMoreClick() {
  pageSizeParams.page += 1;
  buttonLoadMore.disable(buttonLoadMore);

  try {
    const { hits } = await serchPictureGallery(pageSizeParams);

    const markup = markupGallery(hits);
    refs.ulContainer.insertAdjacentHTML('beforeend', markup); // розмітка
    lightbox.refresh();

    const rect = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({ top: rect.height * 1.3, left: 0, behavior: 'smooth' });
  } catch (error) {
    console.log(error);
  } finally {
    buttonLoadMore.enable(buttonLoadMore);

    if (pageSizeParams.page === pageSizeParams.maxPage) {
      refs.buttonLoadMore.style.display = 'none';
      iziToast.error({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
        backgroundColor: '#EF4040',
        color: '#FAFAFB',
      });
      refs.buttonLoadMore.removeEventListener('click', onButtonLoadMoreClick);
    }
  }
}
