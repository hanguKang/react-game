//import React, {useState} from 'react'



type GameBoardInfo = {
    activeSquare:{row:number|null, col:number|null},
    player:string|null
}
//type GamePlayData = string[][];
//type GameLogInfo = [GameBoardInfo, GamePlayData];
interface GameBoardProps {
    onSelected:(row:number, col:number/*, gameBoard:Array<[null | string, null | string, null | string]>*/) => void
    board:(string|null)[][]
    //turns: GameLogInfo[];
    turns?: GameBoardInfo[]
    activePlaySymbol? : string | null
}

// const initialGameBoard : Array<[null | string, null | string, null | string]> = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ]
export default function Gameboard({onSelected, board /*, activePlaySymbol*/ }:GameBoardProps){
// export default function Gameboard({onSelected, turns /*, activePlaySymbol*/ }:GameBoardProps){
    
    
    // console.log('시작',initialGameBoard);
    // const gameBoard = initialGameBoard; //
    // console.log('GameBoard > gameBoard', gameBoard)
    // for(const turn of turns){
    //     //const [gameInfo] = turn; 
    //     const {activeSquare, player} = turn;
    //     const {row, col}= activeSquare;
    //     if(typeof row === 'number' && typeof col === 'number') gameBoard[row][col] = player;
    // }

    return(
        <ol id="game-board">
            { 
                board.map( (rowData, rowIndex) => (
                // gameBoard.map( (rowData, rowIndex) => (

                    <li key={rowIndex}>
                        <ol>
                            {
                                rowData.map((colData, colIndex)=>(
                                    
                                        <li key={rowIndex+'_'+colIndex}>
                                            <button onClick={()=>onSelected(rowIndex, colIndex/*, gameBoard*/)} disabled={colData !=null }>{!colData?'': colData}</button>
                                        </li>
                                    
                                    )
                                )
                            }
                        </ol>
                    </li>
                    )
                )
              
            }
        </ol>
    )
}