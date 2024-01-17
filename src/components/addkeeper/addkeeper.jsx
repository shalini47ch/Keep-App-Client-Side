import { React, useState } from "react";
import "./addkeeper.css";

const AddKeeper = () => {
  const [keeperObj, setKeeperObj] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeeperObj({
      ...keeperObj,
      [name]: value,
    });
  };

  //create a helper function called as clickme for the button
  const ClickMe = () => {
    if (keeperObj.title) {
      alert("Button clicked successfully");
    }
  };

  return (
    <div className="card">
      <input
        type="text"
        name="title"
        autocomplete="off"
        placeholder="add-title"
        onChange={handleChange}
        value={keeperObj.title}
      ></input>
      <textarea
        name="description"
        placeholder="add description"
        onChange={handleChange}
        value={keeperObj.description}
      />
      <button onClick={ClickMe}>Add me</button>
    </div>
  );
};
export default AddKeeper;
