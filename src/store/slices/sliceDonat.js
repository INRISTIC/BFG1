import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donatWay: true,
  donatCard: {
    status: false,
    name: 'Банковская карта',
    urlImg: '../../../../../assets/images/donat-card.png'
  },
  donatQiwi: {
    status: false,
    name: 'Qiwi Wallet',
    urlImg: '../../../../../assets/images/donat-qiwi.png'
  },
  donatMoney: {
    status: false,
    name: 'ЮMoney',
    urlImg: '../../../../../assets/images/donat-money.png'
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