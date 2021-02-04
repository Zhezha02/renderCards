'use strict';

const userCardContainer = document.getElementById('userCardContainer');
const checkedUsers = new Set();
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
  // userCard.addEventListener('click', ({ currentTarget }) => {
  //   // checkedUsers.add({ [currentTarget.dataset.id]: currentTarget });
  //   checkedUsers.add(currentTarget.dataset.id);
  //   console.log(checkedUsers);
  //   const userName = currentTarget.querySelector('.userName').textContent;
  //   addListItem(userName, checkedUsersList)
  //   updateListItem('', checkedUsersList)
  // })

  return userCard;
}

// function addListItem(liContent, ul) {
//   const li = createElement('li', {
//     classNames: [],
//   },
//   document.createTextNode(liContent))
//   ul.append(li);
// }
// /**
//  * 
//  * @param {new Set} db 
//  * @param {Element} list 
//  */
// function updateListItem(db, list)  {
//   const liCollection =  list.children; 
//   for (const item of Object.values(liCollection)){
//     console.log(item.textContent);
//   }
// }



