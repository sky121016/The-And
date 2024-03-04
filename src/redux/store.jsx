import { configureStore } from "@reduxjs/toolkit";
import ruleSlice from "./rule";

export const store = configureStore({
  reducer: {
    rule: ruleSlice,
  },
});
