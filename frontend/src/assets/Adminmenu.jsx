import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';

function Adminmenu() {
  return (
    <div>
      <ListGroup className='m-4'>
        <NavLink className="list-group-item" to="/dashboard/admin/CreateCategory">Category</NavLink>
         <NavLink className="list-group-item" to="/dashboard/admin/CreateProduct">Create Product </NavLink>
         <NavLink className="list-group-item" to="/dashboard/admin/products"> Products</NavLink>
      </ListGroup>
    </div>
  )
}

export default Adminmenu
