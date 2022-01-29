import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('Hi')
  const [text1, setText1] = useState("");
  const [error, setError] = useState(true);

  return (
    <>
      <h2>{text || "Empty"}</h2>
      {text && <h4>Text is contain a value</h4>}
      <h2>{text1 || "Empty"}</h2>
      {text1 && <h4>Text is contain a value</h4>}
      <h6>------------------------------------</h6>
      {!text1 && <h4>Text is contain a value</h4>}
      {error ? (<h4>Text is contain a Error</h4>):(<h4>No error</h4>)}
    </>
  );
};

export default ShortCircuit;
