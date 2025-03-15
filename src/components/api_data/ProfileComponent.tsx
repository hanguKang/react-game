import React, {useEffect, useState}from 'react'
import axios from 'axios'

export default  function ProfileComponent(){
    const [profileName, setProfileName] = useState<string | null>(null);
    useEffect(()=>{
        const fetchData =  async () => {
            
            try {
                const response = await axios({
                    method: 'get', 
                    url:'/api/hanguKang/demoApi/db',
                });
                //console.log('무야호',response);

                    setProfileName(response.data.profile.name); // 데이터 설정

                
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[])
    if(!profileName){
        return <div className="text-red-600">Loding profile...</div>
    }
    return <div className="text-green-600">ProfileName : {profileName}</div>
   
}
