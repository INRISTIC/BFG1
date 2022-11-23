import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalStatus: false,
  modalWindmill: false,
  modalInventory: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      let modal = action.payload
      return {...state, modalStatus: true, ...modal}
    },
    closeModal: () => {
      return {modalWindmill: false, modalStatus: false, modalInventory: false}
    }
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer