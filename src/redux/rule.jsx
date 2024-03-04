import { createSlice } from "@reduxjs/toolkit";

const ruleSlice = createSlice({
  name: "rule",
  initialState: {
    id: null,
    title: "",
    description: "",
  },
  reducers: {
    setRule(state, action) {
      const { id, title, description } = action.payload;
      state.id = id;
      state.title = title;
      state.description = description;
    },
  },
});

export const { setRule } = ruleSlice.actions;

export default ruleSlice.reducer;
