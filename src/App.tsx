import Header from './components/header/header'
import ErrorBoundary from './components/ErrorBoundary'
import React from 'react'
import Player from './components/Player'
import Gameboard from './components/GameBoard'
import './App.css';

function App() {
  
  return (
    <>
      <ErrorBoundary>
          <Header/>
      </ErrorBoundary>
        <main>
          <div id="game-container">
            <ol id="players">
              <Player name={'player 1'} symbol="X"/>
              <Player name={'player 2'} symbol="O"/>
            </ol>
            <Gameboard/>
          </div>

        </main>
    </>
  )
}

export default App