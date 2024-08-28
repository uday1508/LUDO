import { initialState } from "./initialState";
import {createSlice} from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name:'game',
    initialState:initialState,
    reducers:{
        resetGame:()=> initialState,
        updateDiceNo:(state , action) => {
            state.diceNo = action.payload.diceNo;
            state.isDiceRolled = true;
        },
        enablPileSelection:(state , action) => {
            state.touchDiceBlock = true;
            state.pileSelectionPlayer = action.payload.playerNo
        },
        enablCellSelection:(state , action) => {
            state.touchDiceBlock = true;
            state.cellSelectionPlayer = action.payload.playerNo
        },
        disableTouch:(state)=>{
            state.touchDiceBlock = true;
            state.cellSelectionPlayer = -1;
            state.pileSelectionPlayer = -1;
        },
        unFreezeDice:(state)=>{
            state.touchDiceBlock = false;
            state.isDiceRolled = false;
        },
        updateCelebration:(state , action) => {
           state.celebration = action.payload;
        },
        announceKing:(state , action) => {
           state.king = action.payload
        },
        updatePlayerChance:(state , action) => {
           state.turn = action.payload.turn;
           state.touchDiceBlock = false;
           state.isDiceRolled = false;
        }

    },
});

export const {resetGame,
    updateDiceNo,
    updateCelebration,
    unFreezeDice,
    updatePlayerChance,
    announceKing,
    disableTouch,
    enablCellSelection,
    enablPileSelection
} = gameSlice.actions;

export default gameSlice.reducer;

