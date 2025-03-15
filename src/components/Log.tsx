// gameLog의 타입 정의
type GameBoardInfo = {
    activeSquare:{row:number|null, col:number|null},
    player:string|null
}
interface LogProps {
    gameLog : GameBoardInfo[]
}
//type GameLog = [GameTurn, string[][]];

//interface LogProps {
//    gameLog: GameLog[];
//}


export default function Log ({gameLog} : LogProps){
    const updatedGameLog = [...gameLog]
    return(
        <ol id="log">
               {
                    updatedGameLog.map( (data, index)=>{
                        return (
                            <li key={index+'log'}>
                                <div>
                                    player : {data.player}    
                                </div>
                                <div> squareHistory : 
                                    row : <span>{ data.activeSquare.row }</span> {
                                        //data[0] 오류 , '{ activeSquare: { row: number; col: number; }; player: string; } | string[][]' 인덱스 형식에 사용할 수 없으므로 요소에 암시적으로 'any' 형식이 있습니다.}
                                    }
                                    / col : <span>{ data.activeSquare.col }</span>
                                </div>
                                
                            </li>

                        )
                    })
                }
        </ol>
    )
}