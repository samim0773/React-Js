import {useState} from "react"
import logo from "./logo.svg";
import "./App.css";

  /* 
function App() {
  let data = "samim";
  function update() {
    data = "aktar";
    alert(data);
  }
  console.warn("---------------------")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={update}>Update Button</button>
    </div>
  );
}

*/

/*
function App() {
  const [data,setData] =useState("Samim")
  function updateData(){
    setData("Aktar");
  }
  console.warn("_____________")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Button</button>
    </div>
  );
}
*/

function App() {
  const [data,setData] =useState(0)
  function updateData(){
    setData(data+1);
  }
  console.warn("_____________")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Button</button>
    </div>
  );
}
export default App;
