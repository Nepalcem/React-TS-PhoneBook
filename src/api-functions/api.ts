import axios from "axios";
import { ContactObject } from "components/App/App.types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/contacts`);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactObj: ContactObject, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/contacts`, contactObj);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contactObj: ContactObject, thunkAPI) => {
    try {
      const { id, name, number } = contactObj;
      const response = await axios.patch(`${BASE_URL}/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID: number, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/contacts/${contactID}`);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);
