import { createSlice } from "@reduxjs/toolkit";

export const counterSlice2 = createSlice({
    name:"counterSlice2",
    initialState:{
        counter:0
    },
    reducers:{
        increment : (currentSlice,action)=>{
            currentSlice.counter += action.payload
        },
        decrement : (currentSlice,action)=>{
            currentSlice.counter -= action.payload
        },
    },


})
 const { increment, decrement } = counterSlice2.actions;
 export  { increment, decrement };