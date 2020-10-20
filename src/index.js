import './styles.css';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
var debounce = require('lodash.debounce');

const fetchCountriesWithDebounce = debounce(() => {
  fetchCountries(refs.inputRef.value.trim());
}, 500);
refs.inputRef.addEventListener('input', (event) => {
  if (event.data === " ")return;
  fetchCountriesWithDebounce()
});

refs.countriesContainerRef.addEventListener('click', event => {
  if (event.target.nodeName !== "li") return;
  fetchCountries(event.target.textContent);
});