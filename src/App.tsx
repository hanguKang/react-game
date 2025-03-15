import Header from './components/header/header'
import ErrorBoundary from './components/ErrorBoundary'
import React, {useState} from 'react'
import Player from './components/Player'
import Gameboard from './components/GameBoard'
import Log from './components/Log'
import GameOver from './components/GameOver'
import './App.css';
import { WINNING_COMBINATIONS } from './WINNING_COMBINATION'


type GameBoard = {activeSquare:{row:number|null, col:number|null}, player:string|null}
//type GameLog = [GameBoard, string[][]];

const initialGameBoard : Array<[null | string, null | string, null | string]> = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function derivePlayer(gameTurns:GameBoard[]): string{
  let currentPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player === 'X')  currentPlayer = 'O';
  return currentPlayer;
}



function App() {
  const [players, setPlayers] = useState({
    X:'Player 1',
    O:'Player 2',
  })
  //const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState<GameBoard[]>([])
  
  const gameBoard = [...initialGameBoard.map(rowData=> [...rowData])]; 
  //console.log('GameBoard > gameBoard', gameBoard)
  for(const turn of gameTurns){
      //const [gameInfo] = turn; 
      const {activeSquare, player} = turn;
      const {row, col}= activeSquare;
      if(typeof row === 'number' && typeof col === 'number') gameBoard[row][col] = player;
  }


  let currentPlayer = derivePlayer(gameTurns);

  let winnerPlayer : string | null = null; 

  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column] as 'X'|'O'
    const secondeSquareSymbol = gameBoard[combination[1].row][combination[1].column] as 'X'|'O'
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column] as 'X'|'O'
    
    if( 
        firstSquareSymbol && 
        firstSquareSymbol === secondeSquareSymbol && 
        firstSquareSymbol === thirdSquareSymbol
      )
    {
      winnerPlayer = players[firstSquareSymbol];
      //console.log('승리자',winnerPlayer);
    }
  }
  const hasDraw = !winnerPlayer && (gameTurns.length === 9)
  const handleGameSelected = (rowIndex:number, colIndex:number/*, gameSquareData: Array<[null | string, null | string, null | string]>*/) => {


    //console.log( rowIndex , colIndex )
      setGameTurns( prevGameTurns => { 
        currentPlayer = derivePlayer(prevGameTurns);
        //if(prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') currentPlayer = 'O'
        //console.log('내부 currentPlayer',currentPlayer)
        //console.log('prevGameTurn', prevGameTurn)
        const updatedTurn: GameBoard[] = [
          { 
            activeSquare:{row:rowIndex,col:colIndex}, 
            player:currentPlayer 
          }, 
          // gameSquareData.map( rowData => 
          //   rowData.map( 
          //     col=> !col?'':col
          //   ) 
          // ) 
          ...prevGameTurns
        ]
        
        return updatedTurn;
        
      })

    
  }//handleSelected End
  // console.log(gameTurns[0].player);
  // console.log('gameTurns', gameTurns);
  
 function handleRestart(){
  setGameTurns([])
 }
 function handlePlayerNameChane(symbol:string,newName:string){
  //console.log('player에서 값이 넘어왔음');
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers,
      [symbol]:newName
    }
  })
}
  return (
    <>
      <ErrorBoundary>
          <Header/>
      </ErrorBoundary>
        <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">

              <Player name={players.X} symbol="X" isActive={currentPlayer === 'X'} onChangeName={handlePlayerNameChane}/>
              <Player name={players.O} symbol="O" isActive={currentPlayer === 'O'} onChangeName={handlePlayerNameChane}/>
            </ol>
            { (winnerPlayer || hasDraw) && <GameOver onRestart={handleRestart} winner = {winnerPlayer}/>}
            <Gameboard activePlaySymbol = {currentPlayer} onSelected = {handleGameSelected} board={gameBoard}/>
            {/* <Gameboard activePlaySymbol = {currentPlayer} onSelected = {handleGameSelected} turns={gameTurns}/> */}
          </div>
          <Log gameLog={gameTurns} />
        </main>
        
    </>
  )
}

export default App