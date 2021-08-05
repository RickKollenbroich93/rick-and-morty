//--------------- Import ---------------

import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/character/characterCard';
import { getCharacters } from './utils/api';

//--------------- Give the sorted Api data into my Function ---------------

const characters = await getCharacters();

const app = document.querySelector<HTMLDivElement>('#app');
const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerHTML: 'Rick <span class="headerSpan">and</span> Morty',
    }),
    createElement('input', {
      placeholder: 'Search for a character',
      className: 'searchbar',
    }),
    createElement('h2', { innerHTML: 'Character', className: 'h2' }),
    createElement('div', {
      className: 'mainWrapper',
      childElements: characters.map((characters) => characterCard(characters)),
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
