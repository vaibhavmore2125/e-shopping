import React, { useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Adminmenu from '../assets/Adminmenu'
import Categoryform from '../assets/Categoryform'
import { useState } from 'react'
import { useAuth } from '../context/auth'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateCategory() {
  const [name,setName]=useState("")
  const [categories,setCatgeories]=useState([])
  const [selected,setSelected]=useState(null)
  const [updatedName,setUpdatedName]=useState("")
  const [auth]=useAuth()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function getallcategories()
  {
    fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCatgeories(res2.categories)
      })
    })
  }
  useEffect(()=>{
    getallcategories()
  },[])
  function handleSubmit(e)
  {
    e.preventDefault()
    let data={name}
    fetch("https://backend-5ggv.onrender.com/category/create-category",{
      method:"post",
      headers:{
        "content-type":"application/json",
        "authorization":auth?.token
      },
      body:JSON.stringify(data)
    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        getallcategories()
      })
    })
  }
  function handleUpdate(e)
  {
    e.preventDefault()
    let data={name:updatedName}
    fetch(`https://backend-5ggv.onrender.com/category/update-category/${selected._id}`,{
      method:"put",
      headers:{
        "content-type":"application/json",
        "authorization":auth?.token
      },
      body:JSON.stringify(data)
    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setSelected(null)
        setUpdatedName("")
        setShow(false)
        getallcategories()
      })
    })
  }
  function handleDelete(id)
  {
    fetch(`https://backend-5ggv.onrender.com/category/delete-category/${id}`,{
      method:"delete",
      headers:{
        "authorization":auth?.token
      },
    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        getallcategories()
      })
    })
  }
  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
          <Adminmenu/>
          </Col>
          <Col md={9}>
          <h2 className='text-center'>Manage Category</h2>
          <Categoryform handleSubmit={handleSubmit} value={name} setValue={setName}/>
          <h2 className='text-center'>All Categories</h2>
          <table className='table w-50 mx-auto d-block'>
            <tbody>
            {
              categories.map((c,i)=>{
                return (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td><Button variant="primary" onClick={()=>{handleShow();setUpdatedName(c.name);setSelected(c)}}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Categoryform value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
        </Modal.Body>
      </Modal></td>
      <td><Button variant='danger' onClick={()=>handleDelete(c._id)}>Delete</Button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CreateCategory





// import React, { useEffect } from "react"
// import Col from "react-bootstrap/esm/Col"
// import Container from "react-bootstrap/esm/Container"
// import Row from "react-bootstrap/esm/Row"
// import Adminmenu from "../assets/Adminmenu"
// import Categoryform from "../assets/Categoryform"
// import { useState } from "react"
// import { useAuth } from "../context/auth"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Model'
// function CreateCategory() {
//   const [name,setName]=useState("")
//   const [categories,setcategories]=useState([])
//   const [selec]
//   const [auth]=useAuth()
//   function getallCategories()
//   {
//     fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1)=>{
//       res1.json().then((res2)=>{
//         console.log(res2)
//         setcategories(res2.categories)
//       })
//     })
//   }
//   useEffect(()=>{
//     getallCategories()
//   },[])
//   function handleSubmit(e)
//   {
//     e.preventDefault()
//     let data={name}
//     fetch("https://backend-5ggv.onrender.com/category/create-category",{
//       method:"post",
//       headers:{
//         "content-type":"application/json",
//         "authorization":auth?.token
//       },
//       body:JSON.stringify(data)
//     }).then((res1)=>{
//       res1.json().then((res2)=>{
//         console.log(res2)

//       })
//     })
//   }
//   function handleUpdate()
//   {
//     e.preventDefault()
//     let data={name:UpdatedName}
//     fetch(`https://backend-5ggv.onrender.com/category/update-category/${select._id}`,{
//       method:"put",
//       headers:{
//         "content-type":"application/json",
//         "authorization":auth?.token
//       },
//       body:JSON.stringify(data)
//     }).then((res1)=>{
//       res1.json().then((res2)=>{
//         console.log(res2)
//         setSelected(null)
//         setUpdatedName("")
//         setShow(false)
//         getallCategories()
//       })
//     })
//   }
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col md={3}>
//           <Adminmune/>
//           </Col>
//           <Col md={9}>
//           <h2>Manage Category</h2>
//           <Categoryform handleSubmit={handleSubmit} value={name} setValue={setName}/>
//           <h2>All Categories</h2>
//           <table className="table w-50 mx-auto d-block">
//             {
//               categories.map((c,i)=>{
//                 return (
//                   <tr key={i}>
//                     <td>{c.name}</td>
//                     <td><Button variant="primary" onClick={()=>{handleShow();setUpdatedName(c.name);setSelected(c)}}>Edit</Button>
//                     <Modal show={show} onHide={handleClose}>
//                       <Model.Title>Update Category</Model.Title>
                      
//                       </Model.Heder>
//                        <Model.Body>
//                       <Categoryform value={UpdatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
//                       </Model.Body>
//                       </Modal>
//                       <td><Button variant="danger" onClick={=>handledelete(c.id)}</td>
                      
                    
                    
//                     </td>
                    
//                   </tr>
//                 )
//               })
//             }
            
//           </table>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default CreateCategory