import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const accessoireAdd = createAsyncThunk("accessoire/add", async (accessoire) => {
  try {
    let result = axios.post("http://localhost:5001/accessoire/add", accessoire);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const accessoireGet = createAsyncThunk("accessoire/get", async () => {
  try {
    let result = axios.get("http://localhost:5001/accessoire/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const accessoireDelete = createAsyncThunk("accessoire/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/accessoire/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const    accessoireUpdate = createAsyncThunk(
  "accessoire/update",
  async ({ id, accessoire }) => {
    try {
      let response = await axios.put(`http://localhost:5001/accessoire/${id}`, accessoire);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);



const initialState = {
    accessoires: null,
  status: null,
};
export const accessoireSlice = createSlice({
  name: "accessoire",
  initialState,
  reducers: {},
  extraReducers: {
    [accessoireAdd.pending]: (state) => {
      state.status = "pending";
    },
    [accessoireAdd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [accessoireAdd.rejected]: (state) => {
      state.status = "fail";
    },

    [accessoireGet.pending]: (state) => {
      state.status = "pending";
    },
    [accessoireGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.accessoires = action.payload.data.accessoires;
    },
    [accessoireGet.rejected]: (state) => {
      state.status = "fail";
    },
    [accessoireDelete.pending]: (state) => {
      state.status = "pending";
    },
    [accessoireDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [accessoireDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [   accessoireUpdate.pending]: (state) => {
      state.status = "pending";
    },
    [   accessoireUpdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [   accessoireUpdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default accessoireSlice.reducer;
