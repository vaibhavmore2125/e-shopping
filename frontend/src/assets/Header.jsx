import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';
import { useAuth } from '../context/auth';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchinpute from './Searchinpute';
import { useCart } from '../context/cart';

function Header() {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  function handleSignout() {
    localStorage.removeItem('auth');
    setAuth({
      user: null,
      token: ''
    });
  }

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" className='py-3'>
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand as={NavLink} to="/" className= 'fs-3 text-white'>
          E-Shopping
        </Navbar.Brand>

        {/* Middle: Search */}
        <div className="d-flex mx-auto">
          <Searchinpute />
        </div>

        {/* Right: Nav Links */}
        <Nav className="ms-auto d-flex align-items-center gap-3">
          <NavLink className="text-white text-decoration-none" to="/">Home</NavLink>
          <NavLink className="text-white text-decoration-none" to="/about">About</NavLink>

          {!auth.user ? (
            <>
              <NavLink className="text-white text-decoration-none" to="/signup">Signup</NavLink>
              <NavLink className="text-white text-decoration-none" to="/signin">Signin</NavLink>
            </>
          ) : (
            <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
              <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">
                Dashboard
              </NavLink>
              <NavLink className="dropdown-item" to="/signin" onClick={handleSignout}>Signout</NavLink>
            </NavDropdown>
          )}

          <NavLink className="text-white text-decoration-none" to="/cart">
            <IoMdCart size={24} /> <sup>{cart.length}</sup>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;




// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import { IoMdCart } from 'react-icons/io';
// import { useAuth } from '../context/auth';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Searchinpute from './Searchinpute';
// import { useCart } from '../context/cart';
// function Header() {
//   const [auth, setAuth] = useAuth();
//   const [cart]=useCart();
//   function handleSignout() {
//     localStorage.removeItem('auth');
//     setAuth({
//       user: null,
//       token: ''
//     });
//   }

//   return (
//     <div>
//       <Navbar bg="primary" data-bs-theme="dark" className=''>
//         <Container>
//           <Navbar.Brand as={NavLink} to="/">
//             E-Shopping
//             <Searchinpute/>
//           </Navbar.Brand>
//           <Nav className="ms-auto">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About</NavLink>
//             {
//               !auth.user?<>
//               <NavLink to="/signup">Signup</NavLink>
//             <NavLink to="/signin">Signin</NavLink>
//               </>:<><NavDropdown title={auth.user.name} id="basic-nav-dropdown">
//                 <NavLink to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`} className="dropdown-item">Dashboard</NavLink>
//                 <NavLink className="dropdown-item" to="/signin" onClick={handleSignout}>Signout</NavLink>
//                 </NavDropdown>
//                 </>
//             }
            
//             <NavLink to="/signin" onClick={handleSignout}>
//               Signout
//             </NavLink>
//             <NavLink to="/cart"><IoMdCart /> <sup>{cart.length}</sup></NavLink>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;





// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import {NavLink} from 'react-router-dom';
// import {IoMdCart} from "react-icons/io"
// import { useAuth } from '../context/auth';

// function Header(){
//     const [auth,setAuth]=useAuth()
//     function handleSignout(){
//         localStorage.removeItem("auth")
//         setAuth({
//             user:null,
//             token:""
//         })
//     }
//     return(
//         <div>
//             <Navbar bg="primary" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand to="/">E-Shopping</Navbar.Brand>
//                              <Nav className='ms-auto'>
//                              <NavLink to="/">Home</NavLink>
//                              <NavLink to="/about">About</NavLink>
//                              <NavLink to="/signup">Signup</NavLink>
//                             <NavLink to="/signin">Signin</NavLink>
//                            <NavLink to="./Signin.jsx" onClick={handleSignout}>Signout</NavLink>


//                             <NavLink to="/cart"><IoMdCart/></NavLink>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default Header