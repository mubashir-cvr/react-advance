import React, { useState } from 'react';

const UseStateBasics = () => {
  const[text,setText]=useState('Default Text')
  const handleClick=()=>{
    if(text==='Default Text')
    setText("Changed Text")
    else
    setText("Default Text")
  }
  return <React.Fragment>
    <h2>{text}</h2>
    <button className='btn' onClick={handleClick}>My Button</button>
  </React.Fragment>;
};

export default UseStateBasics;
