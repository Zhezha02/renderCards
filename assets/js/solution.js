'use strict';

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
    {
      classNames: ['userCard'],
      attributes: { 'tabindex': 0 }
    },
    createUserImgWrapper(user),
    userName,
    userDescription,
    cardLinks
  );
}


