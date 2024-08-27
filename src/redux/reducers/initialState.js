const poneInitialState = [
    {id:'A1',pos:0,score:0},
    {id:'A2',pos:0,score:0},
    {id:'A3',pos:0,score:0},
    {id:'A4',pos:0,score:0},
]

const ptwoInitialState = [
    {id:'B1',pos:0,score:0},
    {id:'B2',pos:0,score:0},
    {id:'B3',pos:0,score:0},
    {id:'B4',pos:0,score:0},
]

const pthreeInitialState = [
    {id:'C1',pos:0,score:0},
    {id:'C2',pos:0,score:0},
    {id:'C3',pos:0,score:0},
    {id:'C4',pos:0,score:0},
]

const pfourInitialState = [
    {id:'D1',pos:0,score:0},
    {id:'D2',pos:0,score:0},
    {id:'D3',pos:0,score:0},
    {id:'D4',pos:0,score:0},
]

export const initialState = {
    player1:poneInitialState,
    player2:ptwoInitialState,
    player3:pthreeInitialState,
    player4:pfourInitialState,
    turn:1,
    diceNo:1,
    isDiceRolled:false,
    pileSelectionPlayer:-1,
    cellSelectionPlayer:-1,
    touchDiceBlock:false,
    currentPositions:[],
    celebration:false,
    king:null,
}