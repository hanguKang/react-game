import React, { Suspense } from 'react';
import ProfileComponent from '../api_data/ProfileComponent';
import LazyPlaceholder from '../LazyPlaceholder';


export default function Header (){
    const bigImg = import('./BigSizeImg'); //lazy외부에서 최대한 preload시키고
    const LazyBigImg = React.lazy(()=> bigImg ); //바로 layzy로딩 시킨다. 

    return(
        <header>
            <ProfileComponent />
            <Suspense fallback={ <LazyPlaceholder/>}>
                <LazyBigImg />
            </Suspense>
        </header>
    )
}


