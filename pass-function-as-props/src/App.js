import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import Members from "./Members";

function App() {
  function getData() {
    alert("Call Parent component");
  }

  return (
    <div className="App">
      <h1>Pass function as props</h1>
      <User data={getData} />
      <Members data={getData} />
    </div>
  );
}

export default App;
