import { configureStore } from "@reduxjs/toolkit";
import wareHouse from "../features/warehouseListing/wareHouseSlice";
export const store = configureStore({
  reducer: {
    app: wareHouse,
  },
});
