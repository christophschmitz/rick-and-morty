import './character.css';
import { createElement } from '../../utils/createElement';

export function createCharacterCard(): HTMLElement {
  return createElement('div', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }),
      createElement('article', {
        className: 'character-card__info',
        childElements: [
          createElement('h2', { innerText: 'Rick Sanchez' }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Status:' }),
              createElement('p', { innerText: '💚 Alive - Human' }),
            ],
          }),
          createElement('h5', { innerText: 'Origin:' }),
          createElement('p', { innerText: 'Earth (C-137)' }),
        ],
      }),
    ],
  });
}
