import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Samim"
    }
  }
  render() {
    console.log("Render")
    return (
      <div>
        <h1>Hello World {this.state.data}</h1>
      </div>
    );
  }
}

export default App;
