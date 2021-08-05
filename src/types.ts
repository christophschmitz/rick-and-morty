export type Character = {
  name: string;
  image: string;
  status: string;
  species: string;
  origin: string;
};

export type CharacterFromAPI = {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type AllCharactersFromApi = {
  name: string;
  image: string;
  status: string;
  species: string;
  origin: string;
};
