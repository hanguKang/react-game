import React, {useState} from 'react'
const initialGameBoard : Array<[null | string, null | string, null | string]> = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

type GameTurn = {
    activeSquare: { row: number; col: number };
    player: string;
  };
type GameLog = [GameTurn, string[][]];
interface GameBoardFm{
    onSelectSquare:(row:number, col:number, newData:Array<[null | string, null | string, null | string]>)=>void
    activePlayerSymbol?:string,
    turns: GameLog[]
}
export default function Gameboard({onSelectSquare, turns }:GameBoardFm){

    const handleData = (row: number, col: number, data:Array<[null | string, null | string, null | string]>) => {
        return function (){
            onSelectSquare(row, col, data);
        }
    }

    const gameBoard = initialGameBoard;

    for( const turn of turns ){
        const [gameTurn] = turn; //const [{activeSquare, player},] = turn은 에러가 왜 나지? 이미 interface로 타입을 모두 지정했는데
        const {activeSquare, player} = gameTurn;
        const {row, col} = activeSquare;
        gameBoard[row][col] = player;
        // const [{activeSquare, player},] = turn
        // const {row, col} = activeSquare;
        // gameBoard[row][col] = player;
    }


    return(
        <ol id="game-board">
            { 
                 gameBoard.map((rowDatas, rowIndex)=>(
                    <li key={rowIndex}>
                        <ol>
                            {
                                rowDatas.map((colData, colIndex)=>(
                                    <li key={colIndex}>
                                        <button onClick={handleData(rowIndex, colIndex, gameBoard)}>{ !gameBoard[rowIndex][colIndex]?'':gameBoard[rowIndex][colIndex]}</button>
                                    </li > 
                                    ) // return jsx
                                )//inner map end
                            }
                        </ol>
                    </li>) //return jsx
                )//map End
              
            }
        </ol>
    )
}