import {ReactElement, useState} from 'react';

interface PlayerConts{
    name:string;
    symbol:string;
    //children:React.ReactNode;
}
export default function Player({name, symbol}:PlayerConts){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handlePlayerName = ()=>{
        setIsEditing(editing => !editing); // (!isEditing 이렇게 사용하게 react가 스케쥴링을 하는데, react가 시간이 있을 때만 실행할 것이다. 하지만, 함수 형식으로 만들면 즉각 실행한다.  예를 들어서 setEditing(!isEditing) => true ; setEditing(!isEditing)=> false 이렇게 두번을 하면 원상 태인 false가 되어야 하지만, true로 작동하게 된다. 하지만, 함수를 두번 사용하면 즉각적으로 false가 되는 것을 확인할 수 있다. )
        //실험 해보기
        // setIsEditing(editing => !editing);
        // setIsEditing(editing => !editing);
        // setIsEditing(!isEditing); 기본인 false 상태에서 1번 스케쥴링을 실행해서 true로 변경한다. 
        // setIsEditing(!isEditing); 비 동기적으로 다른 스케쥴링을 만든다.1번 스케쥬링을 실행하고 나서 실행하는 것이 아니라 그냥 스케쥴링을 또 만들어서 스케쥴링을 할 때 false 상태를 갖고 있다가 다시 true로 만든다. 이런 방식이라면 여러번 사용할 때 문제가 생길 수 있다. 
    }
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setPlayerName(event.target.value);
    }
    let playerNameDisplay : ReactElement = <span className="player-name">{name}</span>
    let btnCaption = "Edit";
    if(isEditing){
        playerNameDisplay = 
            <>
                <label htmlFor="player_name1" className="hidden">플레이어 : </label>
                <input type="text" name="player_name1" id="player_name1" onChange={handleNameChange} value={playerName} required />
            </>;
        btnCaption = "Save";
    }
    return(
            <li>
                <span className="player">
                     {playerNameDisplay}
                    <span className="player-sybol">{symbol}</span>
                </span>
                <button onClick={handlePlayerName}>{btnCaption}</button>
            </li>
    )
}
