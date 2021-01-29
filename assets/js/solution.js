'use strict';
// new URL('https://www.facebook.com/JasonStatham/');
// new Map()
//   .set('www.facebook.com', 'src_to_icon')
//   .set('www.facebook.com', 'src_to_icon')
//   .set('www.facebook.com', 'src_to_icon');
const USER_DESCRIPTION = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim amet perferendis est dolores eum alias.';


const userCardContainer = document.getElementById('userCardContainer');
const userCards = responseData.map((user) => createUsersCards(user));
userCardContainer.append(...userCards);

function createUsersCards(user) {
  const card = createElement('article');
  const userName = createElement('h3', { classNames: ['userName'] }, getFullName(user));
  const userDescription = createElement('p', {classNames:['cardDescriction']}, USER_DESCRIPTION);

  return card;
}

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

function
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
function createElement(type, { classNames, onClick }, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}