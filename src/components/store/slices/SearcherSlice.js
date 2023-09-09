import { createSlice } from '@reduxjs/toolkit'

export const searcherSlice = createSlice({
  name: 'searcher',
  initialState: {
    value: {
      totalItems: '0',
      items: []
    }
  },
  reducers: {
    ArrayOfItemsFound: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { ArrayOfItemsFound } = searcherSlice.actions

export default searcherSlice.reducer