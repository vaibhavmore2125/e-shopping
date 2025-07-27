import React from 'react'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import { FaRupeeSign } from 'react-icons/fa'

function Cartitems() {
  const [cart, setCart] = useCart()
  const [auth] = useAuth()

  const gettotal = () => {
    let total = 0
    cart.forEach(item => { total += item.price })
    return total
  }

  function removecartitem(cid) {
    let myCart = [...cart]
    let index = myCart.findIndex(item => item._id === cid)
    if (index !== -1) {
      myCart.splice(index, 1)
      setCart(myCart)
      localStorage.setItem("cart", JSON.stringify(myCart))
    }
  }

  return (
    <div>
      <Container className="text-center mt-4">
        <h2>{`Hello!!! ${auth.token && auth.user.name}`}</h2>
        <h4>
          {cart.length > 1
            ? `You have ${cart.length} products in your cart`
            : "Please login to check your cart"}
        </h4>
        {auth?.token && (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((c, index) => (
                <tr key={`${c._id}-${index}`}>
                  <td>
                    <img
                      src={`https://backend-5ggv.onrender.com/product/products-photo/${c._id}`}
                      height={80}
                      width={80}
                      alt=""
                    />
                  </td>
                  <td>{c.name}</td>
                  <td><FaRupeeSign />{c.price}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removecartitem(c._id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>Total Price:</td>
                <td colSpan={2}><FaRupeeSign />{gettotal()}</td>
              </tr>
            </tfoot>
          </table>
        )}
      </Container>
    </div>
  )
}

export default Cartitems

// import React from 'react'
// import { useCart } from '../context/cart'
// import { useAuth } from '../context/auth'
// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/esm/Button'
// import { FaRupeeSign } from 'react-icons/fa'

// function Cartitems() {
//   const [cart, setCart] = useCart()
//   const [auth] = useAuth()

//   const gettotal = () => {
//     let total = 0
//     cart.map(item => { total = total + item.price })
//     return total
//   }

//   function removecartitem(cid) {
//     let myCart = [...cart]
//     let index = myCart.findIndex(item => item._id === cid)
//     myCart.splice(index, 1)
//     setCart(myCart)
//     localStorage.setItem("cart", JSON.stringify(myCart))
//   }

//   return (
//     <div>
//       <Container className='text-center mt-4'>
//         <h2>{`Hello!!! ${auth.token && auth.user.name}`}</h2>
//         <h4>
//           {cart.length > 1
//             ? `You have ${cart.length} products in your cart`
//             : "Please login to check your cart"}
//         </h4>

//         {auth?.token ? (
//           <>
//             <table className='table'>
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Product Name</th>
//                   <th>Price</th>
//                   <th>Action</th> {/* ✅ Action header - same */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((c, index) => ( // ✅ index add केलं fallback साठी
//                   <tr key={`${c._id}-${index}`}> {/* ✅ key आता unique! _id + index */}
//                     <td>
//                       <img
//                         src={`https://backend-5ggv.onrender.com/product/products-photo/${c._id}`}
//                         height={80}
//                         width={80}
//                         alt=''
//                       />
//                     </td>
//                     <td>{c.name}</td>
//                     <td><FaRupeeSign />{c.price}</td>
//                     <td>
//                       <Button
//                         variant='danger'
//                         onClick={() => removecartitem(c._id)}
//                       >
//                         Remove
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan={2}>Total Price: </td>
//                   <td colSpan={2}><FaRupeeSign />{gettotal()}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </>
//         ) : null}
//       </Container>
//     </div>
//   )
// }

// export default Cartitems


// import React from 'react'
// import { useCart } from '../context/cart'
// import { useAuth } from '../context/auth'
// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/esm/Button'
// import { FaRupeeSign } from 'react-icons/fa'

// function Cartitems() {
//   const [cart, setCart] = useCart()
//   const [auth] = useAuth()

//   const gettotal = () => {
//     let total = 0
//     cart.map(item => { total = total + item.price })
//     return total
//   }

//   function removecartitem(cid) {
//     let myCart = [...cart]
//     let index = myCart.findIndex(item => item._id === cid)
//     myCart.splice(index, 1)
//     setCart(myCart)
//     localStorage.setItem("cart", JSON.stringify(myCart))
//   }

//   return (
//     <div>
//       <Container className='text-center mt-4'>
//         <h2>{`Hello!!! ${auth.token && auth.user.name}`}</h2>
//         <h4>
//           {cart.length > 1
//             ? `You have ${cart.length} products in your cart`
//             : "Please login to check your cart"}
//         </h4>

//         {auth?.token ? (
//           <>
//             <table className='table'>
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Product Name</th>
//                   <th>Price</th>
//                   <th>Action</th> {/* ✅ ADD केलेलं Action header */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((c) => (
//                   <tr key={c._id}> {/* ✅ मुख्य बदल - unique key */}
//                     <td>
//                       <img
//                         src={`http://localhost:4503/product/products-photo/${c._id}`}
//                         height={80}
//                         width={80}
//                         alt=''
//                       />
//                     </td>
//                     <td>{c.name}</td>
//                     <td><FaRupeeSign />{c.price}</td>
//                     <td>
//                       <Button
//                         variant='danger'
//                         onClick={() => removecartitem(c._id)}
//                       >
//                         Remove
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan={2}>Total Price: </td>
//                   <td colSpan={2}><FaRupeeSign />{gettotal()}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </>
//         ) : null}
//       </Container>
//     </div>
//   )
// }

// export default Cartitems




// import React from 'react'
// import { useCart } from '../context/cart'
// import { useAuth } from '../context/auth'
// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/esm/Button'
// import { FaRupeeSign } from 'react-icons/fa'
// function Cartitems() {
//   const [cart, setCart] = useCart()
//   const [auth] = useAuth()
//   const gettotal = () => {
//     let total = 0
//     cart.map(item => { total = total + item.price })
//     return total
//   }

//   function removecartitem(cid) {
//     let myCart = [...cart]
//     let index = myCart.findIndex(item => item._id === cid)
//     myCart.splice(index, 1)
//     setCart(myCart)
//     localStorage.setItem("cart", JSON.stringify(myCart))
//   }
//   return (
//     <div>
//       <Container className='text-center mt-4'>
//         <h2>{`Hello!!! ${auth.token && auth.user.name}`}</h2>
//         <h4>{cart.length > 1 ? `You have ${cart.length} products in your cart `: "Please login to check your cart"}</h4>
//         {auth?.token ? <>
//           <table className='table'>
//             <thead>
//               <tr><th>Image</th><th>Product Name</th><th>Price</th></tr>
//             </thead>
//             <tbody>
//               {
//                 cart.map((c) => {
//                   return (
//                     <tr>
//                       <td><img src={`http://localhost:4503/product/products-photo/${c._id}`} height={80} width={80} alt='' /></td>
//                       <td>{c.name}</td>
//                       <td><FaRupeeSign />{c.price}</td>
//                       <td><Button variant='danger' onClick={() => removecartitem(c._id)}>Remove</Button></td>
//                     </tr>
//                   )
//                 })
//               }
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td colSpan={2}>Total Price: </td>
//                 <td colSpan={2}><FaRupeeSign />{gettotal()}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </> : null}


//       </Container>

//     </div>
//   )
// }

// export default Cartitems

// import React from 'react'
// import { useCart } from '../context/cart'
// import { useAuth } from '../context/auth'
// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import { FaRupeeSign } from 'react-icons/fa'
// function Cartitems() {
//   const [cart,setCart]=useCart()//
//   const [auth]=useAuth()
//   const gettotal=()=>{
//     let total=0
//     cart.map(item=>{total=total+item.price})
//     return total
//   }
//   function removecartitem(cid)
//   {
//     let myCart=[...cart]
//     let index=myCart.findIndex(item=>item._id===cid)
//     myCart.splice(index,1)
//     setCart(myCart)
//     localStorage.setItem("cart",JSON.stringify(myCart))
//   }
//   return (
//     <div>
//       <Container className='text-center mt-4'>
        
//       <h2>{`Hello!!! ${auth.token && auth.user.name}`}</h2>
//       <h4>{cart.length>1?`You have ${cart.length} products in your cart`:"Please login to check your cart"}</h4>
//       <table className='table'>
//         <thead>
//           <tr><th>Image</th><th>Product Name</th><th>Price</th></tr>
//         </thead>
//         <tbody>
//           {
//             cart.map((c)=>{
//               return(
//                 <tr>
//                   <td><img src={`https://backend-5ggv.onrender.com/product/products-photo/${c._id}`} height={80} width={80} alt=''></img></td>
//                   <td>{c.name}</td>
//                   <td><FaRupeeSign/></td>
//                   <td><Button variant='danger'>Remove</Button></td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//         <tfoot>
//           <tr><td colSpan={2}>Total Price: </td><td colSpan={2}><FaRupeeSign/> {gettotal()}</td></tr>
//         </tfoot>
//       </table>
//       </>:null}
//       </Container>
//       </div>

       
//   )
// }

// export default Cartitems
