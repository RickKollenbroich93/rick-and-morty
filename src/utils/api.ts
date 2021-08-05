//--------------- Import ---------------

import type { allCharactersApi, Character } from '../types';

//--------------- Using an API ---------------

export async function getCharacters(name?: string): Promise<Character[]> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name ? name : ''}`
  );
  const data: allCharactersApi = await response.json();
  const characters = data.results;
  console.log(characters);

  //--------------- We only want to get what we need ---------------

  const formattCharacters: Character[] = characters.map((character) => {
    const formattCharacter: Character = {
      name: character.name,
      image: character.image,
      status: character.status,
      species: character.species,
      location: character.location.name,
      origin: character.origin.name,
    };
    return formattCharacter;
  });
  return formattCharacters;
}
