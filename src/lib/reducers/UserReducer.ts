import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../config/AxiosConfig";
import type { IUser } from "../types/AuthTypes";

// middleware 
export const getAllActiveUserLists = createAsyncThunk(
  "User/getAllActiveUserLists",
  async () => {
    const response =  await axiosInstance.get("/chat/user-list")
    return response.data
  }
);

// asyn calls
const UserSlicer = createSlice({
  name: "User",
  initialState: {
    allUserLists: [],
    activeUser: {} as IUser,
  },
  reducers: {
    // functions to manipulate state
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllActiveUserLists.fulfilled, (state, action) => {
      state.allUserLists = action.payload
    });
    builder.addCase(getAllActiveUserLists.rejected, (state) => {
      state.allUserLists= []
    });
  }
});

export const { setActiveUser } = UserSlicer.actions;
export default UserSlicer.reducer