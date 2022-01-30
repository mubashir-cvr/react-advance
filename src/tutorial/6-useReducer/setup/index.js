import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModel, setShowModel] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setPeople([...people,{id:new Date().getTime().toString(),name}])
      setName('')
      setShowModel(false);
    } else {
      setShowModel(true);
    }
  };
  return (
    <>
      {showModel && <Modal />}
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
      {
        people.map((person)=>{
          return <div>
            <h4>{person.name}</h4>

          </div>
        })
      }
    </>
  );
};

export default Index;
