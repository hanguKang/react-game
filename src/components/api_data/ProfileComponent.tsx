import React, {useEffect, useState}from 'react'
import axios from 'axios'


export default  function ProfileComponent(){
    const [profileName, setProfileName] = useState<string | null>(null);
    useEffect(()=>{
        const fetchData =  async () => {
            
            try {
                // const instance =  axios.create();
                // const response = await instance.get('/api/hanguKang/demoApi/db',{ 
                //         headers:{
                //             'Cache-Control': 'no-cache', // 캐시 사용 안 함
                //             'Pragma': 'no-cache',        // HTTP/1.0 호환 캐시 무효화
                //             'Expires': '0'               // 즉시 만료 처리
                //         }
                //     }
                // );
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
     },[]) // key를 사용했을 때 자동으로 Header 쪽에서 update를 시도한다. 
    if(!profileName){
        return <div className="text-red-600">Loding profile...</div>
    }
    return <div className="text-green-600">ProfileName : {profileName}</div>
   
}
