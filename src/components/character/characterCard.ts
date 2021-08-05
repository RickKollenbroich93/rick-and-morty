//--------------- Import ---------------

import styles from './characterCard.module.css';
import type { Character } from '../../types';
import { createElement } from '../../utils/createElement';

//--------------- Create an characterCard with the right typ ---------------

export function characterCard({
  image,
  name,
  status,
  species,
  location,
  origin,
}: Character): HTMLElement {
  const character = createElement('div', {
    className: styles.cardWrapper,
    childElements: [
      createElement('img', {
        src: image,
        className: styles.characterImg,
      }),
      createElement('div', {
        className: styles.textWrapper,
        childElements: [
          createElement('h3', { innerText: name, className: styles.h3 }),
          createElement('p', {
            innerText:
              'Status: ' + (status === 'Alive' ? '💚' : '☠️') + `${status}`,
          }),
          createElement('p', {
            innerText: 'Species: ' + species,
          }),
          createElement('p', {
            innerText: 'Location: ' + location,
          }),
          createElement('p', {
            innerText: 'Origin: ' + origin,
          }),
        ],
      }),
    ],
  });

  return character;
}
