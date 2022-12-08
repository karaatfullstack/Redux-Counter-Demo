import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({ // you don't have to clone state, it does this for us!
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            //  Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't 
            //  actually mutate the state because it uses the Immer library, which detects 
            //  changes to a "draft state" and produces a brand new immutable state based 
            //  off of those changes
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        }
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
