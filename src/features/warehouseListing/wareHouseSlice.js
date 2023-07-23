import { createSlice} from "@reduxjs/toolkit";
import {
  filterBySearch,
  filterWareHouse,
  fetchWareHouseData,
  updateWarehouse,
} from "./wareHouseAction";

export const wareHouse = createSlice({
  name: "warehouse",
  initialState: {
    wareHouseList: [],
    wareHouseListDisplay: [],
    wareHouseDetail: {},
  },
  loading: false,
  reducers: {
    loadWareHouseList: (state, action) => {
      const wareHouseData = fetchWareHouseData(state, action);
      state.wareHouseList = [...wareHouseData];
      state.wareHouseListDisplay = [...wareHouseData];
    },

    searchWareHouseList: (state, action) => {
      const searchByName = filterBySearch(state, action);
      state.wareHouseListDisplay = searchByName;
    },

    filteredWareHouseList: (state, action) => {
      const filteredData = filterWareHouse(state, action);
      state.wareHouseListDisplay = filteredData;
    },

    fetchWareHouseDetail: (state, action) => {
      state.wareHouseDetail = { ...action.payload };
    },

    updateWareHouseDetails: (state, action) => {
      const updatedDetails = updateWarehouse(state, action);
      state.wareHouseDetail = { ...action.payload.formData };
      state.wareHouseList = [...updatedDetails];
      state.wareHouseListDisplay = [...updatedDetails];
    },
  },
});

export default wareHouse.reducer;

export const {
  loadWareHouseList,
  searchWareHouseList,
  filteredWareHouseList,
  fetchWareHouseDetail,
  updateWareHouseDetails,
} = wareHouse.actions;
