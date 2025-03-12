// gameLog의 타입 정의
type GameTurn = {
    activeSquare: { row: number; col: number };
    player: string;
};

type GameLog = [GameTurn, string[][]];

interface LogProps {
    gameLog: GameLog[];
}

export default function Log ({gameLog} : LogProps){
    const updatedGameLog = [...gameLog]
    return(
        <ol id="log">
               {
                    updatedGameLog.map( (data, index)=>{
                        return (
                            <li>
                                <div> currenhistory_{index} : 
                                    <span>{ data[0].activeSquare.row }</span> {
                                        //data[0] 오류 , '{ activeSquare: { row: number; col: number; }; player: string; } | string[][]' 인덱스 형식에 사용할 수 없으므로 요소에 암시적으로 'any' 형식이 있습니다.}
                                    }
                                    <span>{ data[0].activeSquare.col }</span>
                                </div>
                                <div>

                                </div>
                            </li>

                        )
                    })
                }
        </ol>
    )
}