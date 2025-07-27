import React from 'react'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Adminmune from '../assets/Adminmune';
import { useAuth } from '../context/auth';
import { useNavigate, useParams } from 'react-router-dom';
import Adminmenu from '../assets/Adminmenu';

function UpdateProduct() {
    const [categories, setCatgeories] = useState([])
      const [name, setName] = useState("")
      const [price, setPrice] = useState("")
      const [description, setDescription] = useState("")
      const [quantity, setQuantity] = useState("")
      const [category, setCategory] = useState("")
      const [photo, setPhoto] = useState("")
      const [id,setId]=useState(null)
      const params=useParams()
      const [auth]=useAuth()
      const naviage=useNavigate()
      function getallcategories() {
        fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1) => {
          res1.json().then((res2) => {
            console.log(res2)
            setCatgeories(res2.categories)
          })
        })
      }
      useEffect(() => {
        getallcategories()
      }, [])
      function getsingleproduct()
      {
         fetch(`https://backend-5ggv.onrender.com/product/single-product/${params.slug}`).then((res1)=>{
          res1.json().then((res2)=>{
            console.log(res2)
            setName(res2.product.name)
            setPrice(res2.product.price)
            setDescription(res2.product.description)
            setQuantity(res2.product.quantity)
            setCategory(res2.product.category._id)
            setId(res2.product._id)
          })
        })
      }
      useEffect(()=>{
        getsingleproduct()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      function updateproduct(e)
      {
        e.preventDefault()
        const prod=new FormData()
        prod.append("name",name)
        prod.append("price",price)
        prod.append("description",description)
        prod.append("quantity",quantity)
        prod.append("category",category)
        prod.append("photo",photo)
        fetch(`https://backend-5ggv.onrender.com/product/update-product/${id}`,{
          method:"put",
          headers:{
            "authorization":auth?.token
          },
          body:prod
        }).then((res1)=>{
          res1.json().then((res2)=>{
            console.log(res2)
            naviage("/dashboard/admin/Products")
          })
        })
      }

      function delprod(id)
      {
        fetch(`https://backend-5ggv.onrender.com/product/product-delete/${id}`,{
          method:"delete",
          headers:{
            "authorization":auth?.token
          }
        }).then((res1)=>{
          res1.json().then((res2)=>{
            console.log(res2)
            naviage("/dashbord/admin/Products")
          })
        })
        
      }
  return (
    <div>
        <Container className='mt-5 text-center'>
                <Row>
                  <Col md={3}>
                  <Adminmenu/>
                  </Col>
                  <Col md={9}>
                  <Form className='w-50 mx-auto d-block mt-5' onSubmit={updateproduct}>
                  <h2 className='my-4'>Update Product</h2>
                  <Form.Select aria-label="Default select example" className='mb-3' name='category' onChange={(e)=>setCategory(e.target.value)}>
                    {
                      categories.map((c) => {
                        return (
                          <option value={c._id} key={c._id}>{c.name}</option>
                        )
                      })
                    }
                  </Form.Select>
                  <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPrice">
                    <Form.Control type="text" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupQuantity">
                    <Form.Control type="text" placeholder="Enter Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupImage">
                    <Form.Control type="file" name="photo" accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])}/>
                  </Form.Group>
                  <Button variant='primary' type='submit'>Update Product</Button>
                  <Button variant='danger' onClick={()=>delprod(id)} className='ms-3'>Delete Product</Button>
                </Form>
                  </Col>
                </Row>
                
              </Container>
    </div>
  )
}

export default UpdateProduct


// import React from 'react'
// import { useState ,useEffect} from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/esm/Button'
// import Container from 'react-bootstrap/esm/Container'
// import Adminmenu from '../assets/Adminmenu'
// import { useAuth } from '../context/auth'
// import { useNavigate, useParams} from 'react-router-dom'
// import Row from 'react-bootstrap/esm/Row'
// import Col from 'react-bootstrap/esm/Col'

// // function UpdateProduct() {
// //   return (
// //     <div>
// //       Update Product
// //     </div>
// //   )
// // }
// function UpdateProduct() {
//   const [categories,setCatgeories]=useState([])
//   const [name,setName]=useState("")
//   const [Price,setPrice]=useState("")
//   const [Description,setDescription]=useState("")
//   const [Quantity,setQuantity]=useState("")
//   const [Category, setCategory]=useState("")
//   const [Photo ,setPhoto]=useState("")
//   const [_id,setId]=useState("")
//   const params=useParams()
//   const [auth]=useAuth()
//   const navigate=useNavigate()
//     function getallcategories()
//     {
//       fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1)=>{
//         res1.json().then((res2)=>{
//           console.log(res2)
//           setCatgeories(res2.categories)
//         })
//       })
//     }
//     useEffect(()=>{
//       getallcategories()
//     },[])
//     function getsingleproduct()
//     {
//         fetch(`https://backend-5ggv.onrender.com/product/single-product/${params.slug}`).then((res1)=>{
//             res1.json().then((res2)=>{
//                 console.log(res2)
//                 setName(res2.product.name)
//                 setPrice(res2.product.Price)
//                  setDescription(res2.product.Description)
//                  setQuantity(res2.product.Quantity)
//                  setCategory(res2.product.Category._id)
//                  setId(res2.product._id)
//             })
//         })
//     }
//     useEffect(()=>{
//         getsingleproduct()
//     },[])
//     function UpdateProduct(e)
//     {
//       e.preventDefault()
//       const prod=new FormData()
//       prod.append("name",name)
//       prod.append("price",Price)
//       prod.append("description",Description)
//       prod.append("quantity",Quantity)
//       prod.append("category",Category)
//       prod.append("photo",Photo)
//       fetch("https://backend-5ggv.onrender.com/Product/create-product",{
//         method:"post",
//         headers:{
//           "authorization":auth?.token
//         },
//         body:prod
//       }).then((res1)=>{
//         res1.json().then((res2)=>{
//             console.log(res2)
//             navigate("/dashboard/admin/Products")
//         })
//       })
//     }
//   return (
//     <div>
//       <Container className='mt-5 text-center'>

//         <Row>
//         <Col md={3}>
//         <Adminmenu/>
//         </Col>
//         <Col md={9}>

        
        
//         <Form className='w-50 mx-auto d-block mt-5' onSubmit={addproduct}>
//           <h2 className='my-4'>Add New Product</h2>
//           <Form.Select aria-label="Default select example" className='mb-3' 
//           value={Category}
//           onChange={(e)=>setCategory(e.target.value)}
//           >
//             {
//               categories.map((c) => {
//                 return(
//                   <option value={c._id} key={c._id}>{c.name}</option>
//                 )
//               })
//             }
//           </Form.Select>
//           <Form.Group className='mb-3' controlId="formGroupName">
//             <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
//           </Form.Group>

//            <Form.Group className='mb-3' controlId="formGroupPrice">
//             <Form.Control type="text" placeholder="Enter Price" value={Price} onChange={(e)=>setPrice(e.target.value)}/>
//           </Form.Group>

//            <Form.Group className='mb-3' controlId="formGroupDescription">
//             <Form.Control type="text" placeholder="Enter Description" value={Description} onChange={(e)=>setDescription(e.target.value)}/>
//           </Form.Group>

//            <Form.Group className='mb-3' controlId="formGroupQuantity">
//             <Form.Control type="text" placeholder="Enter Quantity" value={Quantity} onChange={(e)=>setQuantity(e.target.value)} />
//           </Form.Group>

//           <Form.Group className='mb-3' controlId="formGroupCategory">
//             <Form.Control type="text" placeholder="Enter Category" value={Category} onChange={(e)=>setCategory(e.target.value)} />
//           </Form.Group>

//            <Form.Group className='mb-3' controlId="formGroupImage">
//             <Form.Control type="file" name="photo" accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])}/>
//           </Form.Group>

//           <Button variant='primary' type="submit">Add Product</Button>
//         </Form >

//         </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default UpdateProduct
