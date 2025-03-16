
// type BoardData ={
//     activeSqure:{row:number, col:number}
//     symbol:string
// }
interface GameBoardProps{
    board:Array<[string|null,string|null,string|null ]>
    onSelected:(row:number, col:number) => void;
}

export default function Gameboard({ board , onSelected }:GameBoardProps){

    const handleClick=(row:number, col:number)=>{
        return ()=>{
            onSelected(row, col)
        }
    }
    return(
        <div id="game-board">
            <ol>
            {
                board.map((rowData, rowIndex)=>(
                    <li key={`${rowIndex}_row`}>
                        <ol>
                        { 
                            rowData.map( (colData, colIndex)=>(
                                <li key={`${rowIndex}_${colIndex}`}>
                                    <button onClick={handleClick(rowIndex, colIndex)} disabled={colData?true:false}>{colData?colData:''}</button>
                                </li>
                            ))
                        }
                        </ol>
                    </li>
                ))
            }
            </ol>
        </div>
    )
}