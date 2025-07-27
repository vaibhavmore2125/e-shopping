import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useAuth()

  let navigate = useNavigate()
  function loginuser(e) {
    let u = { email, password }
    e.preventDefault()
    fetch("https://backend-5ggv.onrender.com/auth/login", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(u)
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2)
        alert(" User Logged In Successfully")
        setAuth({
          ...auth,
          user: res2.user,
          token: res2.token
        })
        localStorage.setItem("auth", JSON.stringify(res2))
        navigate('/')
      })
    })
  }


  return (
    <div>
      <Container className='text-center mt-4'>
        <h2>User Login Form</h2>
        <Form className="mx-auto d-block w-25 mt-3" onSubmit={loginuser}>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter Email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Enter Password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
          <Link to='/forgotpass' className='text-secondary ms-3 text-decoration-none'>Forgot Password</Link>
        </Form>
      </Container>
    </div>
  )
}

export default Signin




// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/esm/Container';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/auth';

// function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [auth, setAuth] = useAuth();
//   const navigate = useNavigate();

//   function loginuser(e) {
//     e.preventDefault();
//     const u = { email, password };

//     fetch('https://backend-5ggv.onrender.com/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(u)
//     })
//       .then((res1) => res1.json())
//       .then((res2) => {
//         console.log(res2);
//         alert('User Logged In Successfully');
//         setAuth({
//           ...auth,
//           user: res2.user,
//           token: res2.token
//         });
//         localStorage.setItem('auth', JSON.stringify(res2));
//         navigate('/');
//       });
//   }

//   return (
//     <div>
//       <Container className="text-center mt-4">
//         <h2>User Login Form</h2>
//         <Form className="mx-auto d-block w-25 mt-3" onSubmit={loginuser}>
//           <Form.Group className="mb-3" controlId="formGroupEmail">
//             <Form.Control
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formGroupPassword">
//             <Form.Control type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}/>
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//           <Link
//             to="./Forgotpassword"
//             className="text-secondary ms-3 text-decoration-none"
//           >
//             Forgot Password
//           </Link>
//         </Form>
//       </Container>
//     </div>
//   );
// }

// export default Signin;




// import React from 'react'
// // import Form from "react-bootstrap/Form"; 
// import  Form  from 'react-bootstrap/Form';
// import  Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/esm/Container';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {useAuth} from '../context/auth';
// import { Link } from 'react-router-dom';

// function Signin() {
//         const [email,setEmail]=useState("")
//         const [password,setPassword]=useState("")
//         let navigate=useNavigate()
//         function loginuser(e)
//         {
//         let u={email,password}
//         e.preventDefault()
//         fetch("https://backend-5ggv.onrender.com/auth/login",{
//             method:"post",
//             headers:{
//                 "content-type":"application/json"
//             },
//             body:JSON.stringify(u)
//         }).then((res1)=>{
//             res1.json().then((res2)=>{
//                 console.log(res2)
//                 alert(" User Logged In Successfully")
//                 setAuth({
//                   ...auth,
//                   user:res2.user,
//                   token:res2.token
//                 })
//                 localStorage.setItem('auth',JSON.stringify(res2))
//                 navigate('/')
//             })
//         })
//     }
//   return (
//     <div>
//       <Container className='text-center mt-4'>
//               <h2>User Login Form</h2>
//                <Form className="mx-auto d-block w-25 mt-3" onSubmit={loginuser}>
              
//             <Form.Group className="mb-3" controlId="formGroupEmail">
//                     <Form.Control type="email" placeholder="Enter Email"
//                     value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             </Form.Group> 
//              <Form.Group className="mb-3" controlId="formGroupPassword">
//                     <Form.Control type="password" placeholder="Enter Password"
//                     value={password} onChange={(e)=>setPassword(e.target.value)}/>
//             </Form.Group> 
           
//             <Button variant="primary" type="submit">Submit</Button>
//             <Link  to='./Forgotpassword' className='text-secondary ms-3 text-decoration-none' >Forgot Password</Link>
//              </Form>
//             </Container> 
//     </div>
//   )
// }

// export default Signin


