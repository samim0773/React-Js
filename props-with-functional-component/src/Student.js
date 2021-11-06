// import React from 'react'

// const Student = (props) => {
//     console.warn(props)
//     return (
//         <div>
//             <h1>Student component</h1>
//         </div>
//     )
// }

/*
function Student(p) {
  console.log(p.name);
  return (
    <div style={{backgroundColor:"skyblue"}}>
      <h1>Hello {p.name}</h1>
      <p>{p.other}</p>
      <h2>Email: {p.email}</h2>

    </div>
  );
}

*/

function Student(p) {
    console.log(p.name);
    return (
      <div style={{backgroundColor:"skyblue"}}>
        <h1>Hello {p.name}</h1>
       
  
      </div>
    );
  }
  


export default Student;
