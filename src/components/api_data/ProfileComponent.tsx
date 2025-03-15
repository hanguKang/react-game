import axios from 'axios'
import {useState} from 'react'

export default  function ProfileComponent(){
    const [profile, setProfile] = useState<string|null>(null);



    const fetchData = async ()=>{
        try{
            const instance = axios.create();
            const response = await instance.get('https://my-json-server.typicode.com/hanguKang/demoApi/db',
                {
                    headers:{
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    }
                });
                //console.log(response.data.profile.name);
                setProfile(response.data.profile.name);
        }catch (error){
            console.error(error);
        }
    } 
    fetchData();
    if(profile){
        return (
            <div className="text-blue-800">{profile}</div>
        )
    }
    return (
        <div className="text-green-800">profile loading...</div>
    )
    
   
}
