import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContacts',
    payload: contactId,
  };
};

export const setFilter = newFilter => {
  return {
    type: 'filter/setFilter',
    payload: newFilter,
  };
};
