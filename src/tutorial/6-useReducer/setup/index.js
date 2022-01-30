import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import { reducer } from "./reducer";
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
      const newItem={id:new Date().getTime().toString(),name}
      dispatch({ type: "ADD_ITEM", payLoad: newItem });
      setName('')
    } else {
      dispatch({ type: "NO_VALUE"});
    }
  };
  const closeModel=(e)=>{
    dispatch({ type: "CLOSE_MODEL" });

  }
  return (
    <>
      {state.isModalOpen && <Modal closeModel={closeModel} modelContent={state.modelContent} />}
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
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={()=>{
              dispatch({ type: "REMOVE_ITEM",payLoad:person.id });
            }}>
              Remove

            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
