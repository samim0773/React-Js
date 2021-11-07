import logo from './logo.svg';
import './App.css';
import User from './User';
import React from 'react';

function App() {
  const [name, setName]=React.useState("Aktar")
  return (
    <div className="App">
      <h1>Hello World</h1>
      <User data={name}/>
      <button onClick={()=>setName("Samim")}>Update</button>
    </div>
  );
}

export default App;
