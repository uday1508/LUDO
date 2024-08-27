export const selectCurrentPositions = state => state.game.currentPositions;
export const selectCurrentPlayerChance = state => state.game.turn;
export const selectDiceRolled = state => state.game.isDiceRolled;
export const selectDiceNo = state => state.game.diceNo;

export const selectP1 = state => state.game.player1;
export const selectP2 = state => state.game.player2;
export const selectP3 = state => state.game.player3;
export const selectP4 = state => state.game.player4;

export const selectPocketPileSelection = state => state.game.pileSelectionPlayer;
export const selectCellSelection = state => state.game.cellSelectionPlayer;
export const selectDiceTouch = state => state.touchDiceBlock;
export const selectCelebration = state => state.game.celebration;

export const King = state => state.game.king;
