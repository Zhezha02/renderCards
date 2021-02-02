'use strict';

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