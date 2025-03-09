import Header from './components/header/header'
import ErrorBoundary from './components/ErrorBoundary'
import React from 'react'
import Player from './components/Player'
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
              <Player name="Player 1" symbol="X"/>
              <Player name="Player 2" symbol="O"/>
            </ol>
          </div>

        </main>
    </>
  )
}

export default App