'use strict';

const userCardContainer = document.getElementById('userCardContainer');
const checkedUsersMap = new Map();
const checkedUsersList = document.querySelector('#checkedUsers');
fetch('./assets/js/data/users.json')
  .then((response) => response.json())
  .then((data) => {
    userCardContainer.append(...data.map((user) => createUsersCards(user)))
  })
  .catch(() => { new Error('Data is not delivered') })

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
  const userCard = createElement('article',
    {
      classNames: ['userCard'],
      attributes: { 'tabindex': 0 },
      dataAttr: { "id": user.id }
    },
    createUserImgWrapper(user),
    userName,
    userDescription,
    cardLinks
  );
  userCard.addEventListener('click', ({ currentTarget }) => {
    const userId = currentTarget.dataset.id
    const userName = currentTarget.querySelector('.userName').textContent;

    currentTarget.classList.add('checkedCard');
    expandingTheList(
      checkedUsersMap,
      checkedUsersList,
      {
        dbKey: userId,
        liContent: userName || 'Unknown'
      });

    checkedUsersMap.set(userId, currentTarget);
    console.log(checkedUsersMap); //DELETE
  })

  return userCard;
}



/**
 * 
 * @param {new Map} db 
 * @param {Element} list 
 * @param {*} listItem.dbKey
 * @param {string} listItem.liContent
 * @returns {undefined, HTMLLIElement}
 */
function expandingTheList(db, list, { dbKey, liContent }) {
  if (db.has(dbKey)) {
    return;
  }

  const li = createElement(
    'li',
    {},
    document.createTextNode(liContent)
  )
  list.append(li);
  return li;
}



