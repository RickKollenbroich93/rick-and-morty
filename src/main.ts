//--------------- Import ---------------

import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/character/characterCard';
import { getCharacters } from './utils/api';

//--------------- Give the sorted Api data into my Function ---------------

const characters = await getCharacters();

const characterContainer = createElement('div', {
  className: 'mainWrapper',
  childElements: characters.map((characters) => characterCard(characters)),
});

const app = document.querySelector<HTMLDivElement>('#app');

const searchbar = createElement('input', {
  placeholder: 'Search for a character',
  oninput: async () => {
    characterContainer.innerHTML = '';
    const search = searchbar.value;
    const filteredCharacters = await getCharacters(search);
    const filteredCharacterElements = filteredCharacters.map(
      (filteredCharacter) => characterCard(filteredCharacter)
    );
    characterContainer.append(...filteredCharacterElements);
  },
  className: 'searchbar',
});

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerHTML: 'Rick <span class="headerSpan">and</span> Morty',
    }),

    searchbar,

    createElement('h2', { innerHTML: 'Character', className: 'h2' }),

    characterContainer,
  ],
});

if (app !== null) {
  app.append(mainElement);
}
