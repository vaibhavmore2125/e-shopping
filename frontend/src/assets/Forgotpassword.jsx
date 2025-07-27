import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';

function Forgotpassword() {
    const [newPassword, setNewPassword] = useState("")
    const [email, setEmail] = useState("")
    const [answer, setAnswer] = useState("")
    let navigate = useNavigate()
    function forgotpass(e) {
        let u = { email, newPassword, answer }
        e.preventDefault()
        fetch("http://localhost:4503/auth/forgotpassword", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(u)
        }).then((res1) => {
            res1.json().then((res2) => {
                console.log(res2)
                alert("Password Changed Successfully")
                navigate('/signin')
            })
        })
    }

    return (
        <div>
            <Container className='text-center mt-4'>
                <h2>User Login Form</h2>
                <Form className="mx-auto d-block w-25 mt-3" onSubmit={forgotpass}>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter Email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Enter Password"
                            value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupAnswer">
                        <Form.Control type="text" placeholder="what is your hobby"
                            value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Forgotpassword




