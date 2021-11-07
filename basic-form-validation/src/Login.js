import React, { useState } from "react";
function Login() 
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);

  function loginHandle(e) {
    e.preventDefault();
  }

  function userHandler(e) {
    let nameLen = e.target.value;
    if (nameLen.lenght < 3) {
      console.log("Invalid");
    } else {
      console.log("valid");
    }
    console.log(e.target.value.lenght)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter User Id" onChange={userHandler} />
        <br /> <br />
        <input type="text" placeholder="Enter password" />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );


export default Login;
