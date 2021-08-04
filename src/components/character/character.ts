import styles from './character.module.css';
import { createElement } from '../../utils/createElement';
import type { Character } from '../../types';

export function createCharacterCard({
  name,
  image,
  status,
  species,
  origin,
}: Character): HTMLElement {
  return createElement('div', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.cardImage,
        src: image,
      }),
      createElement('article', {
        className: styles.cardinfo,
        childElements: [
          createElement('h2', {
            className: styles.name,
            innerText: name,
          }),
          createElement('div', {
            childElements: [
              createElement('h5', {
                className: styles.subheading,
                innerText: 'Status:',
              }),
              createElement('p', {
                className: styles.text,
                innerText:
                  (status === 'Alive' ? '💚' : '💀') + `${status} - ${species}`,
              }),
            ],
          }),
          createElement('h5', {
            className: styles.subheading,
            innerText: 'Origin:',
          }),
          createElement('p', { className: styles.text, innerText: origin }),
        ],
      }),
    ],
  });
}
