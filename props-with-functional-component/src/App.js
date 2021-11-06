import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./Student"

/*
function App() {
  return (
    <div className="App">
      <h1>Props in functional component</h1>
      <Student name = {"Samim"} email = {"samim@gamil.com"} />
      <Student name = {"aktar"} email = {"aktar@gamil.com"} />
      <Student name = {"Jon"} email = {"jon@gamil.com"} />
    </div>
  );
}
*/

function App() {
  const [name,setName]=useState("Samim")
  return (
    <div className="App">
      <h1>Props in functional component</h1>
      <Student name={name}/>
      <button onClick={()=>{setName("Aktar")}}>Updata</button>
    </div>
  );
}

export default App;
