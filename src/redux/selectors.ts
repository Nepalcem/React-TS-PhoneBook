import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const getIsLoggedIn = (state: RootState) => state.authorize.isLoggedIn;
const getUser = (state: RootState) => state.authorize.user;
const getIsRefreshing = (state: RootState) =>
  state.authorize.isRefreshing;
const getContacts = (state: RootState) => state.contacts.items;
const getIsLoading = (state: RootState) => state.contacts.isLoading;
const getError = (state: RootState) => state.contacts.error;
const getFilter = (state: RootState) => state.filter;
const getIsAddContactPending = (state: RootState) =>
  state.contacts.isAddContactPending;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const lowerCaseFilterValue = filterValue.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCaseFilterValue)
    );
  }
);

export {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
  getIsAddContactPending,
  getVisibleContacts,
  getIsLoggedIn,
  getUser,
  getIsRefreshing
};