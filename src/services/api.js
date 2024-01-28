import apiInstance from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41980985-8125375fe1d9f9e65ca18808e';

function serchPictureGallery(picture) {
  return apiInstance.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: picture,
      image_type: 'photo',
      image_type: 'horizontal',
      safesearch: true,
    },
  });
}

export { serchPictureGallery };
