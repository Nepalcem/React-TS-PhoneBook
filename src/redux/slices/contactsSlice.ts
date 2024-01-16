import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "api-functions/api";
import { ContactObject } from "components/App/App.types";

interface ContactsSliceInterface {
  items: ContactObject[] | [];
  isLoading: boolean;
  isAddContactPending: boolean;
  error: string | null;
}

const contactsInitialState: ContactsSliceInterface = {
  items: [],
  isLoading: false,
  isAddContactPending: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error";
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
        state.isAddContactPending = true;
      })
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<ContactObject>) => {
          state.isLoading = false;
          state.error = null;
          state.items = [action.payload, ...state.items];
          state.isAddContactPending = false;
        }
      )
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error";
        state.isAddContactPending = false;
      })
      .addCase(updateContact.pending, (state, action) => {
        state.isLoading = true;
        state.isAddContactPending = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((el) =>
          el.id === action.payload.id ? action.payload : el
        );
        state.isAddContactPending = false;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error";
        state.isAddContactPending = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error";
      });
  },
});
