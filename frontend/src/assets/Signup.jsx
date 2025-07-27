import React from 'react'
import Form from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")
    const [answer,setAnswer]=useState("")
    let navigate=useNavigate()

    function adduser(e)
    {
        let u={name,email,password,address,phone,answer}
        e.preventDefault()
        fetch("https://backend-5ggv.onrender.com/auth/register",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(u)
        }).then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2)
                alert("New User Added Successfully")
                navigate('/signin')
            })
        })
    }
    return (
        <div>
            <Container className='text-center mt-4'>
              <h2>User Registration Form</h2>
               <Form className="mx-auto d-block w-25 mt-3" onSubmit={adduser}>
              <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Control type="text" placeholder="Enter Name"
                    value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter Email"
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Enter Password"
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formGroupAddress">
                    <Form.Control type="text" placeholder="Enter Address"
                    value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formGroupPhone">
                    <Form.Control type="text" placeholder="Enter Phone Number"
                    value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </Form.Group> 
             <Form.Group className="mb-3" controlId="formGroupAnswer">
                    <Form.Control type="text" placeholder="Enter Answer"
                    value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
            </Form.Group> 
            <Button variant="primary" type="submit">Submit</Button>
             </Form>
            </Container> 
        </div>
    )
}

export default Signup
