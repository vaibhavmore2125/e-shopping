import React from 'react'
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
function Categoryform({handleSubmit,value,setValue}) {
  return (
    <div>
      <Form onSubmit={handleSubmit} className=''>
        <Form.Group className="mb-3" controlId="formGroupCname">
            <Form.Control type="text" placeholder="Enter Name" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>

      </Form>
    </div>
  )
}

export default Categoryform

