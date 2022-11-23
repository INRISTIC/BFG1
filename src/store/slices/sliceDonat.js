import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donatWay: true,
  donatCard: {
    status: false,
    name: 'Банковская карта',
    urlImg: './1'
  },
  donatQiwi: {
    status: false,
    name: 'Qiwi Wallet',
    urlImg: './21'
  },
  donatMoney: {
    status: false,
    name: 'ЮMoney',
    urlImg: './3'
  },
}

export const donatSlice = createSlice({
  name: 'donat',
  initialState,
  reducers: {
    donatWay: (state, action) => {
      return action.payload
    },
  },
})

export const { donatWay } = donatSlice.actions

export default donatSlice.reducer