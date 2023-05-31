import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./style.css";

function App() {
  const List = [
    {
      id: 1,
      name: "John Smith will do his work",
    },
    {
      id: 2,
      name: "Clean up the house",
    },
    {
      id: 3,
      name: "Buying the groceries",
    },
    {
      id: 4,
      name: "Finishing the dsa and development vdos",
    },
    {
      id: 5,
      name: "Will go to the park and collect some mangoes",
    },
  ];

  const [newItem, setNewItem] = useState();
  const [newList, setNewList] = useState(List);

  const changeHandler = (e) => {
    setNewItem(e.target.value);
  };

  const addHandler = () => {
    const newid = Math.floor(Math.random() * 10000);
    setNewList((prevList) => {
      return [{ id: newid, name: newItem }, ...prevList];
    });
    setNewItem("");
  };

  const deleteHandler = (id) => {
    const updatedList = newList.filter((item) => item.id !== id);
    setNewList(updatedList);
  };

  const toggleHandler = (id) => {
    const updatedList = newList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setNewList(updatedList);
  };

  return (
    <>
      <h2 className="heading">TODO LIST</h2>
      <div className="sub-heading">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Enter Your Task"
          onChange={changeHandler}
          value={newItem}
        />
        <button className="btn" onClick={addHandler}>
          Add
        </button>
      </div>
      <ToDoList
        items={newList}
        onDelete={deleteHandler}
        onToggle={toggleHandler}
      />
    </>
  );
}

export default App;
