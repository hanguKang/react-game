interface GameOverProps {
    currentWinner:string
}
export default function GameOver ({currentWinner}:GameOverProps){
    return<div id="game-over">
        <h2>Game Over</h2>
        
    </div>
}