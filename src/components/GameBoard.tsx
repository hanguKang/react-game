import React, {useState} from 'react'


const initialGameBoard : Array<[null | string, null | string, null | string]> = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
type GameBoardInfo = [
    activeSquare:{row:number, col:number},
    player:string
]
type GamePlayData = string|null[][];
interface GameBoardProps {
    onSelected:()=>void
    turns: GameBoardInfo & GamePlayData;
}

export default function Gameboard({onSelected, turns }:GameBoardProps){
    const gameBoard : Array<[null | string, null | string, null | string]> = initialGameBoard.map((row) => [...row])
    const player:string = 'X'
    const handleBtnClick = (row:number, col:number, player:string)=>{
        return function () {
            //console.log(row, col);

            onSelected(row, col, player)

            for(const turn of turns){
                const [gameBoardInfo] = turn; 
                const {activeSquare, player} = gameBoardInfo;
                const {row, col}= activeSquare;
            }
        }
    }

    return(
        <ol id="game-board">
            { 
                gameBoard.map( (rowData, rowIndex) => {

                    return <li key={rowIndex}>
                        {
                            rowData.map((colData, colIndex)=>{
                                return (
                                    <li key={rowIndex+'_'+colData}>
                                        <button onClick={handleBtnClick(rowIndex, colIndex, player)}>{!gameBoard[rowIndex][colIndex]?'':}</button>
                                    </li>
                                )
                            })
                        }
                    </li>
                })
              
            }
        </ol>
    )
}