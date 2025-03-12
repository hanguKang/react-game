import Header from './components/header/header'
import ErrorBoundary from './components/ErrorBoundary'
import React, {useState} from 'react'
import Player from './components/Player'
import Gameboard from './components/GameBoard'
import Log from './components/Log'
import './App.css';
// gameTurns의 타입 정의
type GameTurn = {
  activeSquare: { row: number; col: number };
  player: string;
};

type GameLog = [GameTurn, string[][]];

function App() {
  const [gameTurns, setGameTurns] = useState<GameLog[]>([]); //게임 유저 턴 및 게임 완료 
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSlectSqure = (rowIndex: number, colIdnex: number, newData:Array<[null | string, null | string, null | string]>)=>{
    
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevGameTurn => {  
      let currentPlayer = 'X'; 
      if(prevGameTurn.length>0 && currentPlayer === 'X') currentPlayer = 'O';
      const updatedTurns: GameLog  = [
        {activeSquare: {row:rowIndex, col:colIdnex}, player:currentPlayer },
        newData.map((row) => row.map((cell) => cell || '')), //튜플로 선언된 2차원 배열을 string[][] 2차원 형식으로 만들어야 한다. 
      ]
      console.log([updatedTurns,...prevGameTurn]);
      return [updatedTurns,...prevGameTurn]; 
    });

  }
  {console.log('activePlayer', activePlayer)}
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
            <Gameboard activePlayerSymbol ={activePlayer} onSelectSquare = {handleSlectSqure} turns={gameTurns}/>
          </div>
          <Log gameLog={gameTurns}/>
        </main>
    </>
  )
}

export default App