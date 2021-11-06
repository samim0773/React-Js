import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] =useState("");
  const [number, setNumber] =useState("");
  const [email, setEmail] =useState("");
  const [course, setCourse] =useState("");
  const [tnc, setTnc] =useState(false);

  function getFormData(e) {
    console.log(name,number,email,course,tnc);
   
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter You Contact Number"
          onChange={(e) => setNumber(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <select onChange={(e) => setCourse(e.target.value)}>
          <option>--- Select Your Course ---</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>{" "}
        <br /> <br />
        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)}
        />{" "}
        <span>Accept Terms and Contitions</span> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
