type BoardPros = {
    activeSquare:{row:number, col:number}
    symbol:string
}
interface LgoProps {
    _turns : BoardPros[]
}
export default function Log ({_turns}: LgoProps ){

    return(
        <ol id="log">
            {
                _turns.map( (turn,turnIndex)=>(
                    <li key={`${turnIndex}_turn`}>
                        <span className='text-2xl text-sky-800'>{turn.symbol}</span> : 
                         <span className='text-amber-950'>{turn.activeSquare.row}/{turn.activeSquare.col}</span>
                    </li>
                ))
            }
        </ol>
    )
}