import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer=(state,action)=>{
console.log(state,action)
return state
}
 const defaultState = {
   people: [],
   isModalOpen: false,
   modelContent: '',
 };

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({type:"TESTING"})
    } else {
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modelContent={state.modelContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            name="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
