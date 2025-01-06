import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter-slice';
import { counterSlice1 } from './slices/counter-slice1';
import { counterSlice2 } from './slices/Counter-slice2';
export const store = configureStore({
    reducer:{
    COUNT : counterSlice.reducer
    ,COUNT1 : counterSlice1.reducer
    ,COUNT2:counterSlice2.reducer
},
});
