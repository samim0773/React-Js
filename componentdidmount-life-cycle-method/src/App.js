import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Samim",
    };
  }
  componentDidMount() {
    console.log("component did monunt");
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Component Did Mount{this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "aktar" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
