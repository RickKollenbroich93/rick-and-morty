//--------------- All my Types i want to export ---------------

export type Character = {
  name: string;
  image: string;
  status: string;
  species: string;
  location: string;
  origin: string;
};

export type CharacterApi = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;

  origin: {
    name: string;
    url: string;
  };

  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
export type allCharactersApi = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterApi[];
};
