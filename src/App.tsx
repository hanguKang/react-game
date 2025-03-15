import React, {useState} from 'react'
import Header from './components/header/header';
import Player from './components/Player';
import Gameboard from './components/GameBoard';
import './App.css';

const initialGameBoard = [
  [null,null,null,],
  [null,null,null,],
  [null,null,null,],
]
interface BoardPros {
  activeSqure:{row:number, col:number}
  symbol:string
}
function setSymbol(turns:BoardPros[]){
  let currentSymbol = 'X';
  if(turns.length>0 && turns[0].symbol === 'X') currentSymbol = 'O';
  return currentSymbol;
}
function App() {
  const [turns, setTurns] = useState<BoardPros[]>([])
  const gameBoard = [...initialGameBoard.map(rowData=>[...rowData])] as Array<[string|null,string|null,string|null ]>;
  for(const turn of turns){
    const {activeSqure, symbol} = turn;
    const {row, col} = activeSqure;
    gameBoard[row][col] = symbol; 
  }

  const currentSymbol = setSymbol(turns)
  const updateBoard = (row:number, col:number)=>{

    setTurns(prevTurns=>{
      const currentSymbol = setSymbol(prevTurns)
      const upDateBoard : BoardPros = {
        activeSqure:{row, col},
        symbol:currentSymbol,
      } 
      return [upDateBoard, ...prevTurns]
    })

  }

  return (
    <>
      <Header />
      <main id="game-container">
        <ol id="players" className="highlight-player">
          <Player bindingPlayer={'player 1'} bindingSymbol={'X'} activeSymbol={currentSymbol==='X'}/>
          <Player bindingPlayer={'player 2'} bindingSymbol={'O'} activeSymbol={currentSymbol==='O'}/>
        </ol>
        <Gameboard board={gameBoard} onSelected={updateBoard}/>
      </main>
    </>
  )
}

export default App