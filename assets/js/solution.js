'use strict';

const userCardContainer = document.getElementById('userCardContainer');

fetch('http://192.168.1.148:3000/users')
  .then((response) => response.json())
  .then((data) => {
    userCardContainer.append(...data.map((user) => createUsersCards(user)))
  })
  .catch(()=>{new Error('Data is not delivered')})

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


