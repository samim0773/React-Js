function User() {
  function registration() {
    alert("Enter Your name:");
  }
  return (
    <div>
      <h1>Registration Form</h1>
      <button onClick={registration}>Click Here For Start Registration</button>
    </div>
  );
}
export default User;
