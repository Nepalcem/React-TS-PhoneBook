import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getContacts = (state: RootState) => state.contacts.items;
export const getIsLoading = (state: RootState) => state.contacts.isLoading;
export const getError = (state: RootState) => state.contacts.error;
export const getFilter = (state: RootState) => state.filter;
export const getIsAddContactPending = (state: RootState) =>
  state.contacts.isAddContactPending;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const lowerCaseFilterValue = filterValue.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCaseFilterValue)
    );
  }
);
