import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Adminmenu from '../assets/Adminmenu'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FaRupeeSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Products() {
    const [prods, setProds] = useState([])
    const [cart, setCart] = useState([])
    function getallproducts() {
        fetch("https://backend-5ggv.onrender.com/product/all-products").then((res1) => {
            res1.json().then((res2) => {
                console.log(res2);
                setProds(res2.products)
            })
        })
    }
    useEffect(() => {
        getallproducts()
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3}>
                        <Adminmenu />
                    </Col>
                    <Col md={9}>
                        <h2 className='text-center my-4'>All Products</h2>
                        <div className='row row-cols-1 row-cols-md-4 gap-4'>
                            {
                                prods.map((p) => {
                                    return (
                                        <Link to={`/dashboard/admin/UpdateProduct/${p.slug}`} key={p._id} className='product-link' style={{ textDecoration: "none" }}>
                                            <Card style={{ width: '16rem' }} className='text-center shadow border-0 h-100'>
                                                <Card.Img variant='top' src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`} className='h-50 w-50 mx-auto d-block' />
                                                <Card.Body>
                                                    <Card.Title>{p.name}</Card.Title>
                                                    <Card.Text className='mb-2'>
                                                        <span className='fw-bold'>{p.description}</span><br />
                                                        <span className='text-success'><FaRupeeSign />{p.price}</span>
                                                    </Card.Text>

                                                    <Button variant='primary' onClick={() => {
                                                        setCart([...cart, p])
                                                        localStorage.setItem("cart", JSON.stringify([...cart, p]))
                                                    }}>Add To Cart</Button>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products

// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/esm/Col'
// import Row from 'react-bootstrap/esm/Row';
// import Container from 'react-bootstrap/esm/Container';
// import { FaRupeeSign } from "react-icons/fa";
// import Adminmenu from '../assets/Adminmenu';
// import { Link } from "react-router-dom";

// function Products() {

//   const [prods, setProds] = useState([])

//   function getallproducts() {
//     fetch("https://backend-5ggv.onrender.com/product/all-products")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setProds(data.products)
//       })
//   }

//   useEffect(() => {
//     getallproducts()
//   }, [])

//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col md={3}>
//             <Adminmenu />
//           </Col>
//           <Col md={9}>
//             <h2 className='text-center my-4'>All Products</h2>
//             <div className="row row-cols-1 row-cols-md-3 g-4">
//               {
//                 prods.map((p) => (
//                   <Col key={p._id}>
//                     <Card className="h-100 shadow border-0 text-center">
//                       <Link
//                         to={`/dashboard/admin/UpdateProduct/${p.slug}`}
//                         className="text-decoration-none text-dark"
//                       >
//                         <Card.Img variant="top" src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`} />
//                         <Card.Body>
//                           <Card.Title>{p.name}</Card.Title>
//                           <Card.Text as="div">
//                             <div>{p.description}</div>
//                             <div><FaRupeeSign /> {p.price}</div>
//                           </Card.Text>
//                           <Button variant='primary' onClick={()=>{
//                                         setCart([...Cart,p])
//                                         localStorage.setItem("cart",JSON.stringify([...Cart,p]))

//                                     }}>Add To Cart</Button>
//                         </Card.Body>
//                       </Link>
//                     </Card>
//                   </Col>
//                 ))
//               }
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Products


// // import React, { useEffect, useState } from 'react'
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import Col from 'react-bootstrap/esm/Col'
// // import Row from 'react-bootstrap/esm/Row';
// // import Container from 'react-bootstrap/esm/Container';
// // import { FaRupeeSign } from "react-icons/fa";
// // import Adminmenu from '../assets/Adminmenu';
// // import { Link } from "react-router-dom";

// // function Products() {

// //   const [prods, setProds] = useState([])

// //   function getallproducts() {
// //     fetch("https://backend-5ggv.onrender.com/product/all-products").then((res1) => {
// //       res1.json().then((res2) => {
// //         console.log(res2)
// //         setProds(res2.products)
// //       })
// //     })
// //   }

// //   useEffect(() => {
// //     getallproducts()
// //   }, [])

// //   return (
// //     <div>
// //       <Container>
// //         <Row>
// //           <Col md={3}>
// //             <Adminmenu />
// //           </Col>
// //           <Col md={9}>
// //             <h2 className='text-center my-4'>All Products</h2>
// //             <div className="row row-cols-1 row-cols-md-3 gap-4">
// //               {
// //                 prods.map((p) => {
// //                   return (
// //                     <Link to={`dashboard/admin/UpdateProduct/${p.slug}`} key={p._id} className='product-link'>
// //                       <Card style={{ width: '18rem' }} className='text-center shadow border-0'>
// //                         <Card.Img variant="top" src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`} className='h' />
// //                         <Card.Body>
// //                           <Card.Title as="h5">{p.name}</Card.Title>
// //                           <p>{p.description}</p>
// //                           <p><FaRupeeSign /> {p.price}</p>
// //                           <Button variant="primary">Add To Cart</Button>
// //                         </Card.Body>
// //                       </Card>
// //                     </Link>
// //                   )
// //                 })
// //               }
// //             </div>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </div>
// //   )
// // }

// // export default Products


// // // import React, { useEffect, useState } from 'react'
// // // import Button from 'react-bootstrap/Button';
// // // import Card from 'react-bootstrap/Card';
// // // import Col from 'react-bootstrap/esm/Col'
// // // import Row from 'react-bootstrap/esm/Row';
// // // import Container from 'react-bootstrap/esm/Container';
// // // import { FaRupeeSign } from "react-icons/fa";
// // // import Adminmenu from '../assets/Adminmenu';
// // // import { Link } from "react-router-dom";


// // // function Products() {

// // //   const [prods,setProds]=useState([])
// // //   function getallproducts()
// // //   {
// // //     fetch("https://backend-5ggv.onrender.com/product/all-products").then((res1)=>{
// // //       res1.json().then((res2)=>{
// // //         console.log(res2)
// // //         setProds(res2.products)
// // //       })
// // //     })
// // //   }
// // //   useEffect(()=>{
// // //     getallproducts()
// // //   },[])
// // //   return (
// // //     <div>
// // //       <Container>
// // //         <Row>
// // //           <Col md={3}>
// // //           <Adminmenu/>
// // //           </Col>
// // //           <Col md={9}>
// // //           <h2 className='text-center my-4'>All Products</h2>
// // //           <div className="row row-cols-1 row-cols-md-3 gap-4">
// // //             {
// // //               prods.map((p)=>{
// // //                 return(
// // //                   <Link to={`dashboard/admin/UpdateProduct/${p.slug}`} key={p._id} className='product-link'>
// // //                   <Card style={{ width: '18rem' }} className='text-center shadow border-0'>
// // //                     <Card.Img variant="top" src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`} className='h' />
// // //                   <Card.Body>
// // //                     <Card.Title>{p.name}</Card.Title>
// // //                     {/* <Card.Text> */}
// // //                     <h5>{p.description}</h5>
// // //                     <h5><FaRupeeSign /> {p.price}</h5>
// // //                     {/* </Card.Text> */}
// // //                     <Button variant="primary">Add To Cart</Button>
// // //                   </Card.Body>
// // //                 </Card>
// // //                 </Link>
// // //                 )
// // //               })
// // //             }
// // //           </div>
// // //           </Col>
// // //         </Row>
// // //       </Container>
// // //     </div>
// // //   )
// // // }

// // // export default Products
