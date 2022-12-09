import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalStatus: false,
  modalWindmill: false,
  modalInventory: false,
  modalComplete: false,
  modalFatal: false,
  modalPersonInfo: false,
  modalBotProtect: false,
  modalBlock: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      let modal = action.payload;
      return { ...state, modalStatus: true, ...modal };
    },
    closeModal: () => {
      return {
        modalWindmill: false,
        modalStatus: false,
        modalInventory: false,
        modalComplete: false,
        modalFatal: false,
        modalPersonInfo: false,
        modalBotProtect: false,
        modalBlock: false,
      };
    },
    openModalCommon: () => {
      return { modalStatus: true };
    },
  },
});

export const { openModal, closeModal, openModalCommon } = modalSlice.actions;

export default modalSlice.reducer;
