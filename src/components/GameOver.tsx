interface GameOverProps {
    currentWinner:string | null
   onRestart: ()=>void
}
export default function GameOver ({currentWinner, onRestart}:GameOverProps){
    const handleRestart = ()=>{
        onRestart();
    }
    return<div id="game-over">
        <h2>Game Over</h2>
        { currentWinner && <p> {currentWinner} won !!</p>}
        { !currentWinner && <p> isDraw !!</p>}
        {<p><button onClick={handleRestart}> reStart </button></p>}
    </div>
}