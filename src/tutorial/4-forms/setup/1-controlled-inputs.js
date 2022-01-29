import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log("Form Submited")

  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input id="firstName" name="firstName"></input>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input id="email" name="email"></input>
          </div>
          <button type="submit" className="btn">
            Add Person
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
