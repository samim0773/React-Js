import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false)
  }

  return (
    <div className="App">
      {print ? <h2>{data}</h2> : null}
      <h1>Get input box value</h1>
      
      <input type="text" onChange={getData} /> <br />

      <button onClick={()=>setPrint(true)}>Print Value</button>
    </div>
  );
}

export default App;
