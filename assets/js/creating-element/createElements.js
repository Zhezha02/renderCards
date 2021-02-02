'use strict';
/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {object} options.attributes - {attrName: attrValue}
 * @param {object} options.dataAttr = {dataAttrName: dataAttarValue}
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(
  type,
  { classNames = [], onClick = null, attributes = {}, dataAttr = {} } = {},
  ...children
) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }
  for (const [dataAttrName, dataAttarValue] of Object.entries(dataAttr)) {
    elem.dataset[dataAttrName] = dataAttarValue;
  }
  elem.append(...children);
  return elem;
}   