import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    if(count>=1){
      document.title=`(${count})`
    }
  },[])//Dependencies 
  return <>
  <h2>{count}</h2>
  <button className='btn' onClick={()=>setCount(count+1)}>Click</button>
  </>;
};

export default UseEffectBasics;
