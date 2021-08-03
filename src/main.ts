import './style.css';
import { createElement } from './utils/createElement';

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
    createElement('p', { innerHTML: 'Test text für Font' }),
  ],
});
// const mainElement = document.createElement('main');

// const title = document.createElement('h1');

// title.innerHTML = `Rick <span class="headerSpan">and</span>  Morty`;
// const text = document.createElement('p');
// text.innerText = 'Test text für Font';

// mainElement.append(title, text);

if (app !== null) {
  app.append(mainElement);
}
