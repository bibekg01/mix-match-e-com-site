import {createSlice} from '@reduxjs/toolkit';

const counterslices = createSlice({
    name: 'counter',
    initialState: {
        value : 0,
    },
    reducers :{
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    }
})

export const {increment, decrement, incrementByAmount} = counterslices.actions;

export default counterslices.reducer;