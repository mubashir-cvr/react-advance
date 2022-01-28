import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0)
  const complexIncrease=()=>{
    setTimeout(()=>{
      // setValue(value+1); This will update the value with one even we are clicking multiple times in 2 sec
      
      setValue((prevValue)=>{
        return prevValue+1;

      })
      //prevValue is previous value functional approch is async

    },2000);

  }
  return <>
  <section style={{margin:'4rem 0'}}>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value-1)}>Dicrease</button>
    <button className='btn'onClick={()=>setValue(0)}>RESET</button>
    <button className='btn' onClick={()=>setValue(value+1)}>Increase</button>

  </section>

   <section style={{margin:'4rem 0'}}>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={complexIncrease}> Increase Later</button>
    
  </section>
  </>;
};

export default UseStateCounter;
