import { createSlice, configureStore } from '@reduxjs/toolkit'

const products = createSlice({
  name: 'products',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state: any, action: any) => {
      const isExists = state.items.find((item: any) => item.id === action.payload.id)
      if (!isExists) state.items.push(action.payload)
    },
    invalidateItems: (state) => {
      state.items = []
    },
  }
})

export const { invalidateItems, addItem } = products.actions

export default products.reducer