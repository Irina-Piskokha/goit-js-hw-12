import apiInstance from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41980985-8125375fe1d9f9e65ca18808e';

function serchPictureGallery({ query, page = 1, per_page }) {
  return apiInstance
    .get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        image_type: 'horizontal',
        safesearch: true,
        per_page,
        page,
      },
    })
    .then(({ data }) => data);
}

export { serchPictureGallery };
