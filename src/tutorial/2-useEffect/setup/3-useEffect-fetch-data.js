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
    </>
  );
};

export default UseEffectFetchData;
