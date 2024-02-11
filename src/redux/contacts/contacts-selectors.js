export const getAllContacts = store => store.contacts.items;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};

export const selectContacts = store => store.contacts;
