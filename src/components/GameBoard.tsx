import React, {useState} from 'react'
const initialGameBoard : Array<[null | string, null | string, null | string]> = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function Gameboard(){
    const [data, setData] = useState(initialGameBoard)
    const [xoData, setXoData] = useState(true)

    const handleDate = (row: number, col: number) => {
    //console.log(row, col); //1. 잘 나타난다.
        return function () {
        console.log(row, col); //2. 반응이 없다.
        // 새로운 배열 생성 (불변성 유지)
        const newData = data.map((rowData, rowIdx) =>
            rowIdx === row
            ? [
                col === 0 ? (xoData ? 'X' : 'O') : rowData[0],
                col === 1 ? (xoData ? 'X' : 'O') : rowData[1],
                col === 2 ? (xoData ? 'X' : 'O') : rowData[2],
                ]
            : rowData
        ) as Array<[null | string, null | string, null | string]>;


        // 상태 업데이트
        setData(newData);
        setXoData((prev) => !prev); // 플레이어 교체

        //console.log(newData);
    };
  };

    return(
        <ol id="game-board">
            { 
                data.map((rowDatas, rowIndex)=>(
                    <li key={rowIndex}>
                        <ol>
                            {
                                rowDatas.map((colData, colIndex)=>(
                                    <li key={colIndex} onClick={handleDate(rowIndex, colIndex)}>
                                        { !data[rowIndex][colIndex]?'':data[rowIndex][colIndex]}
                                    </li>
                                    ) // return jsx
                                )//inner map end
                            }
                        </ol>
                    </li>) //return jsx
                )//map End
              
            }
        </ol>
    )
}