import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './GetData.css';
import { FcApproval } from "react-icons/fc";

function GetApi() {

    const [data, setData] = useState([]);

    console.log(data[0])

    const GetmyData = async ()=>{
        try {
            const res = await axios.get("https://api.github.com/users");
            setData(res.data);
        } catch (error) {
            console.log("Api is not working")
        }
    }
// avatar_url followers_url repos_url loginid
    useEffect(()=>{
        GetmyData();      
    },[])

  return (
    <div className='flex'>
    
        <div className='shadow'>
            <div className='container'>
            {data.map((item)=>{
                return (
                    <div className='card' key={item.id}>
                    <div className='image'>
                        <img src={item.avatar_url} alt='profile'/>
                    </div>
                    <div className='details'>
                        <div className='name'>{item.login} <span><FcApproval/></span></div>
                        <div className='buttons'>
                            <ul>
                                <li><div><p>Repos</p></div><p>5000</p></li>
                                <li><div><p>Followers</p></div><p>5000</p></li>
                                <li><div><p>Following</p></div><p>5000</p></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                )
            })}
                
            </div>
        </div>

	</div>
    
  );
}

export default GetApi;
