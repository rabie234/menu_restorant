// menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    setItmes: (state,actions) => {
      state = actions.payload.products
    
    },
   
  },
});

export const { setItmes } = menuSlice.actions;
export default menuSlice.reducer;

