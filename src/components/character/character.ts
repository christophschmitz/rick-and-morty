import './character.css';
import { createElement } from '../../utils/createElement';

export function createCharacterCard({
  name,
  image,
  status,
  species,
  origin,
}): HTMLElement {
  return createElement('div', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: image,
      }),
      createElement('article', {
        className: 'character-card__info',
        childElements: [
          createElement('h2', { innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Status:' }),
              createElement('p', {
                innerText:
                  (status === 'Alive' ? '💚' : '💀') + `${status} - ${species}`,
              }),
            ],
          }),
          createElement('h5', { innerText: 'Origin:' }),
          createElement('p', { innerText: origin }),
        ],
      }),
    ],
  });
}
