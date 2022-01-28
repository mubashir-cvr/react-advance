import React, { useState } from 'react';

const UseStateBasics = () => {
  const[text,setText]=useState('Random Text')
  return <React.Fragment>
    <h2>{text}</h2>
  </React.Fragment>;
};

export default UseStateBasics;
