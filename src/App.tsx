import React, {useState} from 'react'
import Header from './components/header/header';
import Player from './components/Player';
import Gameboard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './WINNING_COLLECTION';
import './App.css';

const initialGameBoard = [
  [null,null,null,],
  [null,null,null,],
  [null,null,null,],
]
interface BoardPros {
  activeSquare:{row:number, col:number}
  symbol:string
}
function setSymbol(turns:BoardPros[]){
  let currentSymbol = 'X';
  if(turns.length>0 && turns[0].symbol === 'X') currentSymbol = 'O';
  return currentSymbol;
}

interface PlayersProp{
  X:string,
  O:string
}

function handleGameBoard(turns:BoardPros[]){
  const gameBoard = [...initialGameBoard.map(rowData=>[...rowData])] as Array<[string|null,string|null,string|null ]>;

  for(const turn of turns){
    const {activeSquare, symbol} = turn;
    const {row, col} = activeSquare;
    gameBoard[row][col] = symbol; 
  }
  return gameBoard;
}
function getWinner(gameBoard: Array<[string|null,string|null,string|null ]>, players:{X:string, O:string}){
  let winner : string|null = null

  for(const collection of WINNING_COMBINATIONS){
    const firstSequence = gameBoard[collection[0].row][collection[0].column] as 'X'|'O'
    const secondSequence = gameBoard[collection[1].row][collection[1].column] as 'X'|'O'
    const thirdSequence = gameBoard[collection[2].row][collection[2].column] as 'X'|'O'

    if(firstSequence && firstSequence === secondSequence && firstSequence === thirdSequence){
      winner = players[firstSequence]
    }
  }
  return winner;
}
function App() {
  const [players, setPlayers] = useState<PlayersProp>({X:'player 1', O: 'Player 2'});
  const [turns, setTurns] = useState<BoardPros[]>([])
  
  const gameBoard = handleGameBoard(turns)
  const winner = getWinner(gameBoard, players)
  const hasDraw = turns.length === 9 && !winner;

  const currentSymbol = setSymbol(turns)
  const updateBoard = (row:number, col:number)=>{

    setTurns(prevTurns=>{
      const currentSymbol = setSymbol(prevTurns)
      const upDateBoard : BoardPros = {
        activeSquare:{row, col},
        symbol:currentSymbol,
      } 
      return [upDateBoard, ...prevTurns]
    })

  }
  function handleReStart(){
    setTurns([]);
    
  }
  function hanlePlayers(prop:'X'|'O', player:string){
    setPlayers( prevPlayers=> {
      //prevPlayers[prop] = player;
      return { 
              ...prevPlayers,
              [prop]:player
          }
    })
  }
  console.log('winner',winner)
  return (
    <>
      <Header />
      <main id="game-container">
        <ol id="players" className="highlight-player">
          <Player bindingPlayer={'player 1'} bindingSymbol={'X'} activeSymbol={currentSymbol==='X'} savePlayers={hanlePlayers} activeEdit={turns.length>0}/>
          <Player bindingPlayer={'player 2'} bindingSymbol={'O'} activeSymbol={currentSymbol==='O'} savePlayers={hanlePlayers} activeEdit={turns.length>0}/>
        </ol>
        <Gameboard board={gameBoard} onSelected={updateBoard}/>
        {winner && <GameOver onRestart={handleReStart} currentWinner={winner} />}
        {hasDraw && <GameOver onRestart={handleReStart} currentWinner={winner} />}
      </main>
      <Log _turns = {turns}/>
      
      
    </>
  )
}

export default App