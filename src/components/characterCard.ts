import { createElement } from '../utils/createElement';

export function characterCard() {
  const char = {
    id: 172,
    name: 'Jamey',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/172.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/16'],
    url: 'https://rickandmortyapi.com/api/character/172',
    created: '2017-12-29T17:30:20.654Z',
  };

  const character = createElement('div', {
    className: 'cardWrapper',
    childElements: [
      createElement('img', {
        src: char.image,
        className: 'characterImg',
      }),
      createElement('div', {
        className: 'textWrapper',
        childElements: [
          createElement('h3', { innerHTML: 'Jamey', className: 'h3' }),
          createElement('p', { innerHTML: 'Status: Alive' }),
          createElement('p', { innerHTML: 'Species: Human' }),
          createElement('p', {
            innerHTML: 'Location:<br>Earth (Replacement Dimension)',
          }),
          createElement('p', {
            innerHTML: 'First seen in:<br>Look Who Burns Now',
          }),
        ],
      }),
    ],
  });

  return character;
}
