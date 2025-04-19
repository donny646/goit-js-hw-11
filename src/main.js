import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  showLoader();

  const searchText = event.currentTarget.elements['search-text'].value.trim();

  if (searchText === '') {
    iziToast.info({
      title: 'Caution',
      message: 'You forgot important data',
      position: 'topLeft',
    });
    hideLoader();
    return;
  }

  getImagesByQuery(searchText)
    .then(imgData => {
      if (!imgData || imgData.length === 0) {
        iziToast.warning({
          title: 'No Results',
          message: 'No images found for your search.',
          position: 'topRight',
        });
        return;
      }

      clearGallery();
      createGallery(imgData);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images.',
        position: 'topRight',
      });
    })
    .finally(() => hideLoader());
}
