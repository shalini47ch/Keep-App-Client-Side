import "./App.css";
import { React, useState } from "react";
import Header from "./components/header/header";
import AddKeeper from "./components/addkeeper/addkeeper";
import ShowKeeper from "./components/showkeeper/showkeeper";

function App() {
  //here we will create a usestate keeper list and obtain it from the backend
  const [keeperList, setKeeperList] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} />
    </div>
  );
}

export default App;
