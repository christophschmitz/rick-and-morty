import type { AllCharactersFromApi, Character } from '../types';

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: AllCharactersFromApi = await response.json();
  const characters = data.results;

  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      name: character.name,
      origin: character.origin.name,
      status: character.status,
      image: character.image,
      species: character.species,
    };
    return formattedCharacter;
  });
  return formattedCharacters;
}
