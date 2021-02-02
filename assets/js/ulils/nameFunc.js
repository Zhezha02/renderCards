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