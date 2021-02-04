'use strict';

const userCardContainer = document.getElementById('userCardContainer');
const checkedUsers = [];
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
      dataAttr: {"id": user.id}
    },
    createUserImgWrapper(user),
    userName,
    userDescription,
    cardLinks
  );

  userCard.addEventListener('click', (e) => {
    console.log(e.currentTarget);
    checkedUsers.push()
  })

  return userCard;
}


// const userCard = createElement('article',
      //   {
      //     classNames: ['userCard'],
      //     attributes: { 'tabindex': 0 },
      //   },
      //   createUserImgWrapper(user),
      //   userName,
      //   userDescription,
      //   cardLinks
      // );
      
      // // userCard.addEventListener('click', (e) => {
      // //   checkedUsers.push(e.target);
      // //   console.log(checkedUsers);
      // // })
      // return userCard;
      // }
      
      // const checkedUsers = [];
      

