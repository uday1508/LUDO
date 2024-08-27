import { initialState } from "./initialState";
import {createSlice} from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name:'game',
    initialState:initialState,
    reducers:{
        resetGame:()=> initialState
    },
});

export const {resetGame} = gameSlice.actions;

export default gameSlice.reducer;

