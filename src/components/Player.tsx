import {useState} from 'react'

interface PlayerProps{
    bindingPlayer:string;
    bindingSymbol:'X'|'O';
    activeSymbol:boolean;
    savePlayers:(prop:'O'|'X', player:string)=>void;
    activeEdit:boolean;
}
export default function Player({ bindingPlayer, bindingSymbol, activeSymbol,savePlayers, activeEdit }:PlayerProps){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerNmae] = useState(bindingPlayer);

    const handlePlayer = ()=>{
        setIsEditing(prevEditing => !prevEditing);

        if(isEditing){
            //console.log(playerName)
            //console.log('bindingSymbol',bindingSymbol)
            savePlayers(bindingSymbol, playerName);
        }

    }
    const handlePlayerName = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPlayerNmae(e.target.value);
    }
    if(isEditing){
        return <li className={activeSymbol?'active player':'player'}>
            <span className="player-name"><input type="text" value={playerName} onChange={handlePlayerName} /></span> <strong className="player-symbol">{bindingSymbol}</strong> <button onClick={handlePlayer}>Save</button>
        </li> 
    }
    return(
            <li className={activeSymbol?'active player':'player'}>
                <span className="player-name h-10" >{playerName}</span> <strong className="player-symbol">{bindingSymbol}</strong> <button onClick={handlePlayer} disabled={activeEdit}>{activeEdit?'NO Edit':'Edit'}</button>
           </li> 
    )
}
