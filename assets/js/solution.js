'use strict';

const USER_DESCRIPTION = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim amet perferendis est dolores eum alias.';
const socialMediaMap = new Map()
  .set("twitter.com", 'fa-twitter')
  .set("www.instagram.com", 'fa-instagram')
  .set("www.facebook.com", 'fa-facebook');

const userCardContainer = document.getElementById('userCardContainer');
const userCards = responseData.map((user) => createUsersCards(user));
userCardContainer.append(...userCards);

function createUsersCards(user) {
  const userName = createElement(
    'h3',
    { classNames: ['userName'] },
    getFullName(user));

  const userDescription = createElement(
    'p',
    { classNames: ['cardDescriction'] },
    USER_DESCRIPTION);
  const cardLinks = createElement(
    'div',
    { classNames: ['cardLinks'] },
    ...createContactLinks(user)
  )
  return createElement('article',
    { classNames: ['userCard'] },
    createUserImgWrapper(user),
    userName,
    userDescription,
    cardLinks
  );
}

function getFullName({ firstName, lastName }) {
  if (!firstName && !lastName) {
    return '';
  }
  return `${firstName.trim()} ${lastName.trim()}`;
}
function getInitials({ firstName, lastName }) {
  if (!firstName && !lastName) {
    return '';
  }
  return (`${firstName.trim().charAt(0)} ${lastName.trim().charAt(0)}`);
}

function createContactLinks({ contacts }) {
  return contacts
    .filter((contact) => contact ? contact : '')
    .map((contact) => {
      return createElement(
        'a',
        {
          classNames: ['mediaLink'],
          attributes: { 'href': contact, 'target': '_blank' }
        },
        createContactIcon(contact))
    })
}

function createContactIcon(contact) {
  const span = createElement(
    'span',
    { classNames: ['fa', 'icon'] }
  );
  span.classList.add(socialMediaMap.get(new URL(contact).hostname));
  return span;
}

function createUserImgWrapper(user) {
  const imageWrapper = createElement('div',
    {
      classNames: ['imageWrapper'],
      attributes: { 'id': `wrapper${user.id}` }
    });
  imageWrapper.style.background = stringToColour(getFullName(user));

  const initials = createElement('div',
    { classNames: ['initials'] },
    document.createTextNode(getInitials(user)));

  createImgElem(user, 'cardImg');
  imageWrapper.append(initials);
  return imageWrapper;
}


function createImgElem(user, ...classCSS) {
  const img = createElement('img', {
    classNames: classCSS,
    attributes: {
      'alt': getFullName(user), 'src': user.profilePicture
    }
  });
  img.dataset.id = user.id;

  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);

  return img;
}

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {object} options.attributes - {attrName: attrValue}
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(
  type,
  { classNames = [], onClick = null, attributes = {} } = {},
  ...children
) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }
  elem.append(...children);
  return elem;
}

/* 
  UTILS
*/

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}