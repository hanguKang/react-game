import {useState} from 'react'

interface PlayerProps{
    bindingPlayer:string
    bindingSymbol:string
    activeSymbol:boolean;
}
export default function Player({ bindingPlayer, bindingSymbol, activeSymbol }:PlayerProps){
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerNmae] = useState(bindingPlayer)

    const handlePlayer = ()=>{
        setIsEditing(prevEditing => !prevEditing)
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
                <span className="player-name h-10" >{playerName}</span> <strong className="player-symbol">{bindingSymbol}</strong> <button onClick={handlePlayer}>Edit</button>
           </li> 
    )
}
