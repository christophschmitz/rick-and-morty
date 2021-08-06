import './style.css';
import { createCharacterCard } from './components/character/character';
import { createElement } from './utils/createElement';
import type { Character } from './types';

import { getCharacters } from './utils/api';

const characters: Character[] = await getCharacters();

const characterContainer = createElement('div', {
  className: 'characterContainer',
  childElements: characters.map((character) => createCharacterCard(character)),
});

const searchbar = createElement('input', {
  placeholder: 'Search for a character',
  oninput: async () => {
    characterContainer.innerHTML = '';

    const search = searchbar.value;

    const filteredCharacters = await getCharacters(search);

    const filteredCharacterElements = filteredCharacters.map(
      (filteredCharacter) => createCharacterCard(filteredCharacter)
    );

    characterContainer.append(...filteredCharacterElements);
  },
});

const header = createElement('header', {
  childElements: [
    createElement('img', {
      className: 'logo',
      src: 'https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png',
    }),
    searchbar,
  ],
});

const mainElement = createElement('main', {
  childElements: [characterContainer],
});
const app = document.querySelector<HTMLDivElement>('#app');
if (app !== null) {
  app.append(header, mainElement);
}
