import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "redux/store";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthorizeHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorizeHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "authorize/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthorizeHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 11000
      ) {
        toast.warning(
          "Not able to register user with such credentials! Try different ones."
        );
      }
     return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

export const logIn = createAsyncThunk(
  "authorize/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthorizeHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        toast.error("Not able to Log In with such credentials! Try again..");
      }
       return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

export const logOut = createAsyncThunk(
  "authorize/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthorizeHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "authorize/refresh",
  async (_, thunkAPI) => {
    const { token } = (thunkAPI.getState() as RootState).authorize;

    if (!token) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setAuthorizeHeader(token);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);