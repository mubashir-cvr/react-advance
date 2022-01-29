import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [user,setUser]=useState([])

  const getUsers = async()=>{
    const response=await fetch(url)
    const users= await response.json()
    setUser(users) 
  }
  
  useEffect(async ()=>{
    getUsers()
  },[])
  return (
    <>
      <h2>User List</h2>
      <ul className='users'>
        {user.map((u)=>{
          const {id,login,avatar_url}=u
          return (
            <li key={id}>
              <img src={avatar_url}></img>
              <div>
                <h4>{login}</h4>
                <a href={avatar_url}>profile</a>
              </div>
            </li>
          );

        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
