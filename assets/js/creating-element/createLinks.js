'use strict';

function createContactLinks({ contacts }) {
  return contacts
    .map((contact) => {
      return createElement(
        'a',
        {
          classNames: [
            'mediaLink',
            'fa',
            SOCIAL_MEDIA_MAP.get(new URL(contact).hostname)
          ],
          attributes: { 'href': contact, 'target': '_blank' }
        })
    })
    .filter(Boolean);
}