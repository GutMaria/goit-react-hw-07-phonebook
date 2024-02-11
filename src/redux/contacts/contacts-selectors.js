import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filter-selectors';

export const selectContacts = store => store.contacts;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts.items;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);

