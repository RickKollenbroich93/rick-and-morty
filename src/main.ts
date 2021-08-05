import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/character/characterCard';
import { Character } from './types';
const characters: Character[] = [
  {
    name: 'Jamey',
    status: 'Alive',
    species: 'Human',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/172.jpeg',
    origin: 'Earth (Replacement Dimension)',
  },
  {
    name: 'Tinkles',
    status: 'Dead',
    species: 'Alien',
    origin: 'unknown',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/352.jpeg',
  },
];

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
