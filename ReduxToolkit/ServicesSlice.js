import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getServices = createAsyncThunk(
  "Skapluie/getServices",
  async (_, thunkAPI) => {
    const response = await fetch("http://localhost:3001/services");
    const res = await response.json();
    return res;
  }
);

// create a slice
export const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
  },
  extraReducers: {
    [getServices.pending]: (state, action) => {
      console.log(action.payload);
    },
    [getServices.fulfilled]: (state, action) => {
      state.services = action.payload;
    },
  },
});

/******************************************************* */
// config the store
const store = configureStore({
  reducer: {
    service: serviceSlice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const iconAction = serviceSlice.actions;
