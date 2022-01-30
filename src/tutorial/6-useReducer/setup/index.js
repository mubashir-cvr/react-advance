import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer=(state,action)=>{
  // state Previous state
  if ((action.type === "ADD_ITEM")) {
    const newItem=[...state.people,action.payLoad]
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modelContent: "item Added",
    };
  }
  if ((action.type==="NO_VALUE")){
     return {
       ...state,
       isModalOpen: true,
       modelContent: "No VALUES in Input",
     };
  }
  if (action.type === "CLOSE_MODEL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  throw new Error('no Matching Action Type')
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
      const newItem={id:new Date().getTime().toString(),name}
      dispatch({ type: "ADD_ITEM", payLoad: newItem });
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
          </div>
        );
      })}
    </>
  );
};

export default Index;
