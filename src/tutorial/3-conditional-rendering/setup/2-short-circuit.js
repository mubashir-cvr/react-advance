import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('Hi')
  const [text1, setText1] = useState("");

  return (
    <>
      <h2>{text || "Empty"}</h2>
      {text && <h4>Text is contain a value</h4>}
      <h2>{text1 || "Empty"}</h2>
      {text1 && <h4>Text is contain a value</h4>}
      <h6>------------------------------------</h6>
      {!text1 && <h4>Text is contain a value</h4>}
    </>
  );
};

export default ShortCircuit;
