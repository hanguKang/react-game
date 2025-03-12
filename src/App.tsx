import Header from './components/header/header'
import ErrorBoundary from './components/ErrorBoundary'
import React, {useState} from 'react'
import Player from './components/Player'
import Gameboard from './components/GameBoard'
import Log from './components/Log'
import './App.css';

type GameBoard = [
  {activeSquare:{row:number, col:number}, player:string}
]
type GameBoardData = string[][]

interface GameInfoProps {
  gameboard: GameBoard
  gameBoardData : GameBoardData
}

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurn, setGameTurn] = useState<GameInfoProps[]>([])

  const handleGameSelected = (rowIndex:number, colIndex:number, curPlayer:string)=>{
    setActivePlayer( prevActivePlayer => prevActivePlayer==='X' ? 'O':'X' );

    console.log( rowIndex , colIndex ,curPlayer)

    //if(gameTurn.length > 0 && rowIndex && colIndex && curPlayer){
      setGameTurn( prevGameTurn => {
        const currentPlayer = curPlayer;
        return [
          {activeSqure:{row:rowIndex,col:colIndex}, player:currentPlayer}, ...prevGameTurn
        ]
      })
    //}else{}

    
  }


  return (
    <>
      <ErrorBoundary>
          <Header/>
      </ErrorBoundary>
        <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">
              
              <Player name={'player 1'} symbol="X" isActive={activePlayer === 'X'}/>
              <Player name={'player 2'} symbol="O" isActive={activePlayer === 'O'}/>
            </ol>
            
          </div>
          <Gameboard onSelected = {handleGameSelected} turn={gameTurn}/>
        </main>
    </>
  )
}

export default App