import logo from "./logo.svg";
import "./App.css";
import User from "./User"

function App() {
  function apple() {
    alert("Function called");
  }

  return (
    <div className="App">
      <h1>Welcome to React Tutotial</h1>
      <button onClick={apple}>Click 1</button>
      <button onClick={() => alert("Hello")}>Click 2 </button>
      <button onClick={() => apple()}>Click 3 </button>
      <h2>-----------------------------------------------------</h2>
      <User/>

    </div>
  );
}

export default App;
