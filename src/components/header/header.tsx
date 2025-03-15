import React, {useCallback, useState, Suspense } from 'react';
import ProfileComponent from '../api_data/ProfileComponent';
import LazyPlaceholder from '../LazyPlaceholder';


export default function Header (){
    const [apiKey, setApiKey] = useState(0);
    const bigImg = import('./BigSizeImg'); //lazy외부에서 최대한 preload시키고
    const LazyBigImg = useCallback(React.lazy(()=> bigImg ),[]); //바로 layzy로딩 시킨다. 
    const updateApi = ()=>{ 
        setApiKey(prevApiKey => prevApiKey+1 )
     }
     console.log(apiKey)
    return(
        <header>
            <ProfileComponent key={apiKey} />
            <Suspense fallback={ <LazyPlaceholder/>}>
                <LazyBigImg />
            </Suspense>
            <button className="text-red-500" onClick={updateApi}> refresh Button </button>
        </header>
    )
}


