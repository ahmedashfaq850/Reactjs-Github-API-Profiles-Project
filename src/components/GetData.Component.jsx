import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './GetData.css';

function GetData() {

    const [data, setData] = useState([]);

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
    <div className='container'>
        <h1>container</h1>

            {/* <div className='gird-container'>
        {data.map((item)=>{
            return <div key={item.id} className='card-component'>
                <div className='flex-box'>
                    <div className='image' style={{
                        backgroundImage: `url(${item.avatar_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: "100px",
                        height: "100px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        marginLeft: "3px",
                    }}>
                    </div>
                    <div className='details'>
                        <div className='user-name'>{item.login}</div>
                        <div className='row-container'>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>c</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        })}
        </div> */}
        </div>
  )
}

export default GetData;
