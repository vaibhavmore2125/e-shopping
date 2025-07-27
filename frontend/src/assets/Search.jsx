import React, { useState } from 'react'
import { useSearch } from '../context/search'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FaRupeeSign } from 'react-icons/fa'

function Search() {
    const [values] = useSearch()//, setValues
    const [cart, setCart] = useState([])

    return (
        <div>
            <Container>
                <h2>Search Result</h2>
               <h4>
                        {values?.result.length < 1
                        ? "No products found"
                        : `Total ${values.result.length} products Found`}
              </h4>


            </Container>
            <div className='row row-cols-1 row-cols-md-4 gap-4'>
                {
                    values.result.map((p) => {
                        return (
                            <Card style={{ width: '18rem' }} className='text-center shadow border-0 h-100' key={p._id}>
                                <Card.Img variant='top' src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`} className='h-50 w-50 mx-auto d-block' />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text className='mb-2'>
                                        <span className='fw-bold'>{p.description}</span><br />
                                        <span className='text-success'><FaRupeeSign />{p.price}</span>
                                    </Card.Text>

                                    <Button variant='primary'onClick={() => {
                                        const newCart = [...cart, p];
                                         setCart(newCart);
                                          localStorage.setItem("cart", JSON.stringify(newCart));
                                          }}>Add To Cart</Button>

                                </Card.Body>
                            </Card>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Search

// import React from 'react'
// import { useSearch } from '../context/search'
// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import { FaRupeeSign } from 'react-icons/fa'

// function Search() {
//     const [values, setValues] = useSearch()
//     return (
//         <div>
//             <Container>
//                 <h2>Search Result</h2>
//                 <h4>
//                     {
//                         values?.result.length < 1 ? "No products found" : Total ${values.result.length} products Found
//                     }
//                 </h4>

//             </Container>
//             <div className='row row-cols-1 row-cols-md-4 gap-4'>
//                 {
//                     values.result.map((p, i) => {
//                         return (
//                             <Card style={{ width: '18rem' }} className='text-center shadow border-0 h-100' key={p._id}>
//                                 <Card.Img variant='top' src={`https://backend-5ggv.onrender.com/product/products-photo/${p._id}`} className='h-50 w-50 mx-auto d-block' />
//                                 <Card.Body>
//                                     <Card.Title>{p.name}</Card.Title>
//                                     <Card.Text className='mb-2'>
//                                         <span className='fw-bold'>{p.description}</span><br />
//                                         <span className='text-success'><FaRupeeSign />{p.price}</span>
//                                     </Card.Text>

//                                     <Button variant='primary' onClick={()=>{
//                                         setCart([...Cart,p])
//                                         localStorage.setItem("cart",JSON.stringify([...Cart,p]))

//                                     }}>Add To Cart</Button>
//                                 </Card.Body>
//                             </Card>

//                         )
//                     })
//                 }
//             </div>

//         </div>
//     )
// }

// export default Search