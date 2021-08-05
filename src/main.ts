import './style.css';
import { createCharacterCard } from './components/character/character';
import { createElement } from './utils/createElement';
import type { Character } from './types';
import { getCharacters } from './utils/api';
const characters: Character[] = [
  {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/28.jpeg',
    status: 'Dead',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
  {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/28.jpeg',
    status: 'Dead',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
];

const header = createElement('header', {
  childElements: [
    createElement('img', {
      className: 'logo',
      src: 'https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png',
    }),
    createElement('input', {
      placeholder: 'Search for character',
    }),
  ],
});

const mainElement = createElement('main', {
  childElements: [
    createElement('div', {
      className: 'characterContainer',
      childElements: characters.map((character) =>
        createCharacterCard(character)
      ),
    }),
  ],
});
const app = document.querySelector<HTMLDivElement>('#app');
if (app !== null) {
  app.append(header, mainElement);
}

/*


const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerText = 'Rick and Morty';
title.className = 'heading';

const input = document.createElement('input');
input.placeholder = 'Search for a character...';

const para = document.createElement('p');
para.innerText = 'Character List';

mainElement.append(title, para, input);*/
if (app !== null) {
  app.append(mainElement);
}
