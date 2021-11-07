import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    console.log("costructor");
    this.state = {
      count: 0
    };
  }
  componentDidUpdate(preProps,preState,snapshot) {
    console.warn("Component did update",preProps);
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>component did update {this.state.count}</h1>
        <button onClick={() =>{this.setState({count:this.state.count+1})}}>
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
