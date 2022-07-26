import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const vetementAdd = createAsyncThunk("vetement/add", async (vetement) => {
  try {
    let result = axios.post("http://localhost:5001/vetement/add", vetement);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const vetementGet = createAsyncThunk("vetement/get", async () => {
  try {
    let result = axios.get("http://localhost:5001/vetement/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const vetementDelete = createAsyncThunk("vetement/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/vetement/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const    vetementUpdate = createAsyncThunk(
  "vetement/update",
  async ({ id, vetement }) => {
    try {
      let response = await axios.put(`http://localhost:5001/vetement/${id}`, vetement);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);



const initialState = {
  vetements: null,
  status: null,
};
export const vetementSlice = createSlice({
  name: "vetement",
  initialState,
  reducers: {},
  extraReducers: {
    [vetementAdd.pending]: (state) => {
      state.status = "pending";
    },
    [vetementAdd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [vetementAdd.rejected]: (state) => {
      state.status = "fail";
    },

    [vetementGet.pending]: (state) => {
      state.status = "pending";
    },
    [vetementGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.vetements = action.payload?.data.vetements;
    },
    [vetementGet.rejected]: (state) => {
      state.status = "fail";
    },
    [vetementDelete.pending]: (state) => {
      state.status = "pending";
    },
    [vetementDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [vetementDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [   vetementUpdate.pending]: (state) => {
      state.status = "pending";
    },
    [   vetementUpdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [   vetementUpdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default vetementSlice.reducer;
