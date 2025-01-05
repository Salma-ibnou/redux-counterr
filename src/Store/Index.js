import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter-slice';
import { counterSlice1 } from './slices/counter-slice1';
export const store = configureStore({
    reducer:{
    COUNT : counterSlice.reducer
    ,COUNT1 : counterSlice1.reducer
},
});
