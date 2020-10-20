import refs from './refs';
import countryItemTemplate from '../template/country-item.hbs';
import countriesListTemplate from '../template/countries-item-list.hbs';
import createMarkups from './createMarkups';
import { success, error } from '@pnotify/core';



export default function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  if(!searchQuery) return;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.length > 10) {
        error('Сделайте более специфичный запрос!');
      } else if (data.length === 1) {
        success('Страна найдена');
        createMarkups(data, countryItemTemplate);
        refs.inputRef.value = "";
      } else if (data.length > 1 && data.length <= 10) {
        createMarkups(data, countriesListTemplate);
      }
    })
    .catch(error => console.log(error));
}


