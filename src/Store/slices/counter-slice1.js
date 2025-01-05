import { createSlice } from "@reduxjs/toolkit";

export const counterSlice1 = createSlice({
    name:"counterSlice1",
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
 const { increment, decrement } = counterSlice1.actions;
 export  { increment, decrement };