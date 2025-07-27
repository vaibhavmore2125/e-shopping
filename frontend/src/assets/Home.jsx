import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FaRupeeSign } from 'react-icons/fa'
import { useCart } from '../context/cart'

function Home() {
  const [categories, setCategories] = useState([])
  const [allProds, setAllProds] = useState([])  // 👉🏼 All products fetched once
  const [prods, setProds] = useState([])        // 👉🏼 Products to display
  const [checked, setChecked] = useState([])
  const [cart, setCart] = useCart()

  // Get all categories
  function getAllCategories() {
    fetch("https://backend-5ggv.onrender.com/category/all-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories || [])
      })
  }

  // Get all products
  function getAllProducts() {
    fetch("https://backend-5ggv.onrender.com/product/all-products")
      .then((res) => res.json())
      .then((data) => {
        setAllProds(data.products || [])
        setProds(data.products || []) // 👉🏼 Show all by default
      })
  }

  useEffect(() => {
    getAllCategories()
    getAllProducts()
  }, [])

  function handleFilter(value, id) {
    let updated = [...checked]
    if (value) {
      updated.push(id)
    } else {
      updated = updated.filter(c => c !== id)
    }
    setChecked(updated)
  }

  useEffect(() => {
    if (checked.length === 0) {
      // 👉🏼 If nothing selected, show all
      setProds(allProds)
    } else {
      filterProduct()
    }
  }, [checked, allProds])

  function filterProduct() {
    fetch("https://backend-5ggv.onrender.com/product/filter-products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ checked })
    })
      .then((res) => res.json())
      .then((data) => {
        setProds(data.products || [])
      })
  }

  return (
    <Container>
      <Row>
        <Col md={3}>
          <h4 className='my-4'>Filter By Category</h4>
          {categories.map((c) => (
            <Form.Check
              type='checkbox'
              key={c._id}
              label={c.name}
              className='mt-4 fs-5'
              checked={checked.includes(c._id)}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
            />
          ))}
          <Button
            variant='secondary'
            className='my-5 fs-5 px-3'
            onClick={() => setChecked([])} // 👉🏼 Clear filter resets checked
          >
            Clear Filter
          </Button>
        </Col>

        <Col md={9}>
          <h2 className='text-center my-4'>All Products</h2>
          <div className='row row-cols-1 row-cols-md-4 gap-2'>
            {prods.map((p) => (
              <Card style={{ width: '18rem', height: '350px' }} className='text-center shadow border-0' key={p._id}>
                <Card.Img
                  variant='top'
                  src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`}
                  className='h-50 w-50 mx-auto d-block'
                />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <div>
                    <div className='fw-bold'>{p.description}</div>
                    <div className='text-success'><FaRupeeSign />{p.price}</div>
                  </div>
                  <Button
                    variant='primary'
                    className='mt-2'
                    onClick={() => {
                      const updatedCart = [...cart, p]
                      setCart(updatedCart)
                      localStorage.setItem("cart", JSON.stringify(updatedCart))
                    }}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home

// import React, { useEffect, useState } from 'react'
// import Col from 'react-bootstrap/esm/Col'
// import Container from 'react-bootstrap/esm/Container'
// import Row from 'react-bootstrap/esm/Row'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import { FaRupeeSign } from 'react-icons/fa'
// import { useCart } from '../context/cart'

// function Home() {
//   const [categories, setCatgeories] = useState([])
//   const [prods, setProds] = useState([])
//   const [checked, setChecked] = useState([])
//   const [cart, setCart] = useCart()

//   function getAllCategories() {
//     fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1) => {
//       res1.json().then((res2) => {
//         console.log(res2)
//         setCatgeories(res2.categories)
//       })
//     })
//   }

//   useEffect(() => {
//     getAllCategories()
//   }, [])

//   function getAllProducts() {
//     fetch("https://backend-5ggv.onrender.com/product/all-products").then((res1) => {
//       res1.json().then((res2) => {
//         console.log(res2);
//         setProds(res2.products)
//       })
//     })
//   }

//   useEffect(() => {
//     getAllProducts()
//   }, [])

//   function handleFilter(value, id) {
//     console.log(value, id)
//     let all = [...checked]
//     if (value) {
//       all.push(id)
//     } else {
//       all = all.filter(c => c !== id)
//     }
//     setChecked(all)
//   }

//   function filterProduct() {
//     let data = { checked }
//     fetch("https://backend-5ggv.onrender.com/product/filter-products", {
//       method: "post",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(data)
//     }).then((res1) => {
//       res1.json().then((res2) => {
//         console.log(res2)
//         setProds(res2.products)
//       })
//     })
//   }

//   useEffect(() => {
//     console.log("Checked Categories:", checked);
//     if (checked.length) {
//       filterProduct()
//     } else {
//       getAllProducts() // जर काहीच select नसेल तर परत सगळे products घेऊन ये
//     }
//   }, [checked])

//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col md={3}>
//             <h4 className='my-4'> Filter By Category</h4>
//             {
//               categories.map((c) => {
//                 return (
//                   <Form.Check
//                     type='checkbox'
//                     key={c._id}
//                     label={c.name}
//                     className='mt-4 fs-5'
//                     checked={checked.includes(c._id)}
//                     onChange={(e) => handleFilter(e.target.checked, c._id)}
//                   />
//                 )
//               })
//             }
//             <Button
//               variant='secondary'
//               className='my-5 fs-5 px-3'
//               onClick={() => setChecked([])}
//             >
//               Clear Filter
//             </Button>
//           </Col>

//           <Col md={9}>
//             <h2 className='text-center my-4'>All Products</h2>
//             <div className='row row-cols-1 row-cols-md-4 gap-2'>
//               {
//                 prods.map((p) => {
//                   return (
//                     <Card style={{ width: '18rem', height: '350px' }} className='text-center shadow border-0' key={p._id}>
//                       <Card.Img
//                         variant='top'
//                         src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`}
//                         className='h-50 w-50 mx-auto d-block'
//                       />
//                       <Card.Body>
//                         <Card.Title>{p.name}</Card.Title>
//                         <div>
//                           <div className='fw-bold'>{p.description}</div>
//                           <div className='text-success'><FaRupeeSign />{p.price}</div>
//                         </div>
//                         <Button
//                           variant='primary'
//                           className='mt-2'
//                           onClick={() => {
//                             setCart([...cart, p])
//                             localStorage.setItem("cart", JSON.stringify([...cart, p]))
//                           }}
//                         >
//                           Add To Cart
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   )
//                 })
//               }
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Home



// import React, { useEffect, useState } from 'react'
// import Col from 'react-bootstrap/esm/Col'
// import Container from 'react-bootstrap/esm/Container'
// import Row from 'react-bootstrap/esm/Row'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import { FaRupeeSign } from 'react-icons/fa'
// import { useCart } from '../context/cart'
// function Home() {
//   const [categories, setCatgeories] = useState([])
//   const [prods, setProds] = useState([])
//   const [checked, setchecked] = useState([])
//   const [cart,setCart]=useCart()
//   function getallcategories() {
//     fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1) => {
//       res1.json().then((res2) => {
//         console.log(res2)
//         setCatgeories(res2.categories)
//       })
//     })
//   }
//   useEffect(() => {
//     getallcategories()
//   }, [])

//   function getallproducts() {
//     fetch("https://backend-5ggv.onrender.com/product/all-products").then((res1) => {
//       res1.json().then((res2) => {
//         console.log(res2);
//         setProds(res2.products)
//       })
//     })
//   }
//   useEffect(() => {
//     getallproducts()
//   }, [])

//   function handleFilter(value, id) {
//     console.log(value, id);
//     let all = [...checked]
//     if (value) {
//       all.push(id)
//     }
//     else {
//       all = all.filter(c => c !== id)
//     }
//     setchecked(all)
//   }

//   function filterProduct() {
//     let data = { checked }
//     fetch("https://backend-5ggv.onrender.com/product/filter-products", {
//       method: "post",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(data)
//     }).then((res1) => {
//       res1.json().then((res2) => {
//         console.log(res2)

//         setProds(res2.products)
//       })
//     })
//   }
//   useEffect(() => {
//     console.log("Checked Categories:", checked);
//     if (checked.length) filterProduct()
//   }, [checked])
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col md={3}>
//             <h4 className='my-4'> Filter By Category</h4>
//             {
//               categories.map((c) => {
//                 return (
//                   <Form.Check
//                     type='checkbox'
//                     key={c._id}
//                     label={c.name}
//                     className='mt-4 fs-5'
//                     onChange={(e) => handleFilter(e.target.checked, c._id)}
//                   />
//                 )
//               })
//             }
//             <Button variant='secondary' className='my-5 fd-5 px-3' onClick={() => window.location.reload()}>clear
//               filter</Button>
//           </Col>
//           <Col md={9}>
//             <h2 className='text-center my-4'>All Products</h2>
//             <div className='row row-cols-1 row-cols-md-4 gap-2'>
//               {
//                 prods.map((p) => {
//                   return (
//                     <Card style={{ width: '18rem', height: '300px' }} className='text-center shadow border-0' key={p._id}>
//                       <Card.Img
//                         variant='top'
//                         src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`}
//                         className='h-50 w-50 mx-auto d-block'
//                       />
//                       <Card.Body>
//                         <Card.Title>{p.name}</Card.Title>
//                         <div>
//                           <div className='fw-bold'>{p.description}</div>
//                           <div className='text-success'><FaRupeeSign />{p.price}</div>

//                         </div>
//                         {/* <Button variant='primary' className='mt-2'>Add To Cart</Button> */}
//                           <Button variant='primary' className='mt-2' onClick={() => {
//                           setCart([...cart, p])
//                           localStorage.setItem("cart", JSON.stringify([...cart, p]))
//                         }}>Add To Cart</Button>
//                       </Card.Body>
//                     </Card>
//                   )
//                 })
//               }
//             </div>

//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Home


// // import React, { useEffect, useState } from 'react'
// // import Col from 'react-bootstrap/esm/Col'
// // import Container from 'react-bootstrap/esm/Container'
// // import Row from 'react-bootstrap/esm/Row'
// // import Form from 'react-bootstrap/Form'
// // import Button from 'react-bootstrap/Button'
// // import Card from 'react-bootstrap/Card'
// // import { FaRupeeSign } from 'react-icons/fa'
// // function Home() {
// //   const [categories, setCatgeories] = useState([])
// //   const [prods, setProds] = useState([])
// //   const [checked, setChecked] = useState([])
// //   function getallcategories() {
// //     fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1) => {
// //       res1.json().then((res2) => {
// //         console.log(res2)
// //         setCatgeories(res2.categories)
// //       })
// //     })
// //   }
// //   useEffect(() => {
// //     getallcategories()
// //   }, [])

// //   function getallproducts() {
// //     fetch("https://backend-5ggv.onrender.com/product/all-products").then((res1) => {
// //       res1.json().then((res2) => {
// //         console.log(res2);
// //         setProds(res2.products)
// //       })
// //     })
// //   }
// //   useEffect(() => {
// //     getallproducts()
// //   }, [])
// //   function handleFilter(value,id)
// //   {
// //     console.log(value,id)
// //     let all=[...checked]
// //     if(value)
// //     {
// //       all.push(id)
// //     }else
// //     {
// //       all=all.filter(c=>c!==id)
// //     }
// //     setChecked(all)
// //   }
// //   function filterProduct()
// //   {
// //     const data = { checked };
// //     fetch("https://backend-5ggv.onrender.com/product/filter-products", {
// //   method: "post",
// //       headers:{
// //         "content-type":"application/json"
// //       },
// //       body:JSON.stringify(data)
// //     }).then((res1)=>{
// //       res1.json().then((res2)=>{
// //         console.log(res2)
// //         setProds(res2.products)
// //       })
// //     })
// //   }
// //   useEffect(()=>{
// //   if (checked.length) filterProduct()
// //   },[checked])
// //   return (
// //     <div>
// //       <Container>
// //         <Row>
// //           <Col md={3} className='m-4'>
// //             <h4 className='my-4'> Filter By Category</h4>
// //             {
// //               categories.map((c) => {
// //                 return (
// //                   <Form.Check
// //                     type='checkbox'
// //                     key={c._id}
// //                     label={c.name}
// //                     className='mt-4 fs-5'
// //                     onChange={(e)=>handleFilter(e.target.checked,c._id)}
// //                   />
// //                 )
// //               })
// //             }
// //             <Button variant='secondary' className='my-5 fs-5 px-3' onClick={()=>window.location.reload()}>Clear Filter</Button>
// //           </Col>
// //           <Col md={9}>
// //             <h2 className='text-center my-4'>All Products</h2>
// //             <div className='row row-cols-1 row-cols-md-3 gap-2'>
// //               {
// //                 prods.map((p) => {
// //                   return (
// //                     <Card style={{ width: '18rem', height: '300px' }} className='text-center shadow border-0' key={p._id}>
// //                       <Card.Img variant='top' src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`}
// //                         className='h-50 w-50 mx-auto d-block' />
// //                       <Card.Body>
// //                         <Card.Title>{p.name}</Card.Title>
// //                         <Card.Text>
// //                           <h5>{p.description}</h5>
// //                           <h5><FaRupeeSign />{p.price}</h5>
// //                         </Card.Text>
// //                         <Button variant='primary'>Add To Cart</Button>
// //                       </Card.Body>
// //                     </Card>

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

// // export default Home

// // // import React, {useEffect ,useState } from 'react'
// // // import Container from 'react-bootstrap/esm/Container'
// // // import Col from 'react-bootstrap/esm/Col'
// // // import Row from 'react-bootstrap/esm/Row'
// // // import Form from 'react-bootstrap/Form'
// // // function Home() {
// // //   const [categories,setCatgeories]=useState([])
// // //   function getallcategories()
// // //     {
// // //       fetch("https://backend-5ggv.onrender.com/category/all-categories").then((res1)=>{
// // //         res1.json().then((res2)=>{
// // //           console.log(res2)
// // //           setCatgeories(res2.categories)
// // //         })
// // //       })
// // //     }
// // //     useEffect(()=>{
// // //       getallcategories()
// // //     },[])
// // //     function handleFilter(value,id){
// // //       let all=[...Check]
// // //       }
// // //   return (
// // //     <div>
// // //       <Container>
// // //         <Row>
// // //           <Col md={2} className='m-4'>
// // //           <h4 className='my-4'>Fillter By Category</h4>
// // //           {
// // //             categories.map((c)=>{
// // //               return(
// // //                 <Form.Check
// // //                 type="checkbox"
// // //                 key={c._id}
// // //                 lable={c.name}
// // //                 className='mt-4 fs-5'
// // //                 onChange={(e)=>handleFilter}
// // //                 />
// // //               )
// // //             })
// // //           }
          
// // //           </Col>
// // //           <Col md={9}>
// // //           <h2 className='text-center my-4'>All Products</h2>
// // //           <div clss="row row-cols-1 row-cols-md3 gap-4">
// // //             {
// // //               Products.map((p,i)={
// // //                 return(
// // //                   <Card style={{width:'18rem',height:"300px"}} className='text-center shadow border-0' key={p._id}>
// // //                   <cart.Img variant="top" src={`https://backend-5ggv.onrender.com/product/product-photo/${p._id}`} />
// // //                 )
// // //               })
// // //               }
// // //           </div>
          
// // //           </Col>
// // //         </Row>
// // //       </Container>
// // //     </div>
// // //   )
// // // }

// // // export default Home
