import {ReactElement, useState} from 'react';

interface PlayerConts{
    name:string;
    symbol:string;
    isActive: boolean;
    //children:React.ReactNode;
}
export default function Player({name, symbol, isActive }:PlayerConts){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handlePlayerName = ()=>{
        
        setIsEditing(editing => !editing); 
    }
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setPlayerName(event.target.value);
    }
    let playerNameDisplay : ReactElement = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit";
    if(isEditing){
        playerNameDisplay = 
            <>
                <label htmlFor="player_name1" className="hidden">플레이어 : </label>
                <input type="text" name="player_name1" id="player_name1" onChange={handleNameChange} defaultValue={playerName} required />
            </>;
        btnCaption = "Save";
    }
    return(
            <li className={isActive?'active':''}>
                <span className="player">
                     {playerNameDisplay}
                    <span className="player-sybol">{symbol}</span>
                </span>
                <button onClick={handlePlayerName}>{btnCaption}</button>
            </li>
    )
}
