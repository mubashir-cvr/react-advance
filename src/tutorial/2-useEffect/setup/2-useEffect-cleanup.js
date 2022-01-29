import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return ()=>{
      console.log('Clean Up');
      window.removeEventListener('resize',checkSize)
    }
  });

  const [size, setSize] = useState(window.innerWidth);
  return (
    <>
      <h2>Window</h2>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
