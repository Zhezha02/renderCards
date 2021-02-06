'use strict';
function createDeleteBtn(onDelete, parentId) {
  const btn = createElement(
    'button',
    {
      dataAttr: { value: parentId }
    },
    document.createTextNode('X')
  )
  btn.addEventListener('click', onDelete);
  return btn;
}