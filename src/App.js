import "./App.css";
import { React, useState, useEffect } from "react";
import Header from "./components/header/header";
import AddKeeper from "./components/addkeeper/addkeeper";
import ShowKeeper from "./components/showkeeper/showkeeper";
import axios from "axios";

function App() {
  //here we will create a usestate keeper list and obtain it from the backend
  const [keeperList, setKeeperList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getKeeper")
      .then((res) => setKeeperList(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //here we will use the useEffect hook and fetch the data from axios
  return (
    <div className="App">
      <Header />
      <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} />
    </div>
  );
}

export default App;
