import React from 'react'
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";



import Container from "react-bootstrap/esm/Container";

import Adminmenu from '../assets/Adminmenu'
import { useAuth } from '../context/auth'
function AdminDashboard() {
  const [auth]=useAuth()

  return (
    
    <div>
      <h1>Admin Dashboard</h1>;
      <Container>
        <Row>
          <Col md={3}>
          <Adminmenu/>
          </Col>
           <Col md={9}>
           <Card className='m4 w-50'>
            <Card.Body>
              <h3>Admin Name: {auth.user.name}</h3>
               <h4>Email Address: {auth.user.email}</h4>
                <h4>Phone Number: {auth.user.phone}</h4>
                 <h4>Address: {auth.user.address}</h4>
            </Card.Body>
           </Card>
           </Col>

        </Row>
      </Container>
      
    </div>
  )
}

export default AdminDashboard
