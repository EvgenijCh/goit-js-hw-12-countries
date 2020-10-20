import refs from './refs';

export default function createMarkup (data, template) {
  refs.countriesContainerRef.innerHTML = '';
  const markup = template(data);
  refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
};
