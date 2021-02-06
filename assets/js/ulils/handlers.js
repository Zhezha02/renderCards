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

function deleteHandler(e) {
  const {
    target: {
      dataset: { value }
    }
  } = e

  this.remove();

  checkedUsersMap.get(value).classList.remove('checkedCard');
  checkedUsersMap.delete(value);
}
