import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/characterCard';

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
      childElements: [characterCard(), characterCard(), characterCard()],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
