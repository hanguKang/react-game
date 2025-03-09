//import React, { useState } from 'react';
import React, {useState, Suspense} from 'react';
import logo from '../../assets/game-logo.png'
import LazyPlaceholder from '../LazyPlaceholder';
import ProfileComponent from '../api_data/ProfileComponent';


export default function Header (){
    //const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [profileKey, setProfileKey] = useState(0);
    const LazyImg = React.lazy( ()=> { 
        return  import('./BigSizeImg') }
    );

    // const handleImgLoad = ()=>{
    //     setIsImgLoaded(true);
    // }
    const refreshProfile = ()=> setProfileKey((prev) => prev + 1 );
   
    return(
        <header>
            <ProfileComponent key={profileKey}/>
            <button onClick={refreshProfile}>Refresh Profile</button> 
            {/* {!isImgLoaded && <LazyPlaceholder/>} */}
            <Suspense fallback={<LazyPlaceholder/>}>
                {/* <LazyImg onLoad={handleImgLoad}/> */}
                <LazyImg/>
            </Suspense>
            <img 
                    src={logo} 
                    alt="로고" 
                />
            <h1>Tic-Tac_Toe</h1>
        </header>
    )
}