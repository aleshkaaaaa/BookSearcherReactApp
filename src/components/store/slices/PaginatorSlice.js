import { createSlice } from '@reduxjs/toolkit'

export const paginatorSlice = createSlice({
  name: 'paginator',
  initialState: {
    value: ''
  },
  reducers: {
    SearchValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { SearchValue } = paginatorSlice.actions

export default paginatorSlice.reducer