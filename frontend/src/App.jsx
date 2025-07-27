import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import Cartitems from './assets/Cartitems'
import Header from './assets/Header'
import Signup from './assets/Signup'
import Signin from './assets/Signin'
import Footer from './assets/Footer'
import Forgotpassword from './assets/Forgotpassword'
import PrivateRoutes from './assets/PrivateRoutes'
import Dashboard from './user/Dashboard'
import AdminRoutes from './assets/AdminRoutes'
import AdminDashboard from './admin/AdminDashboard'
import CreateCategory from './admin/CreateCategory'
import CreateProduct from './admin/CreateProduct'
import Products from './admin/Products'
import UpdateProduct from './admin/UpdateProduct'
import Search from './assets/Search'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        {/* ✅ User Private Routes */}
        <Route path='/dashboard' element={<PrivateRoutes />}>
          <Route path='user' element={<Dashboard />} />
        </Route>

        {/* ✅ Admin Protected Routes */}
        <Route path='/dashboard' element={<AdminRoutes />}>
        <Route path='admin' element={<AdminDashboard />} />

          <Route path='admin/CreateCategory' element={<CreateCategory />} />
          <Route path='admin/CreateProduct' element={<CreateProduct />} />
          <Route path='admin/UpdateProduct/:slug' element={<UpdateProduct/>}/>
          <Route path='admin/products' element={<Products />} />
        </Route>

        <Route path='/cart' element={<Cartitems />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/Forgotpass' element={<Forgotpassword />} />
      <Route path='/search' element={<Search />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App



// import './App.css'
// import { Routes,Route } from 'react-router-dom'
// import Home from './assets/Home'
// import About from './assets/About'
// import Cartitems from './assets/Cartitems'
// import Header from './assets/Header'
// import Signup from './assets/Signup'
// import Signin from './assets/Signin'
// import Footer from './assets/Footer'
// import Forgotpassword from './assets/Forgotpassword'
// import PrivateRoutes from './assets/PrivateRoutes'
// import Dashboard from './user/Dashboard'
// import AdminRoutes from './assets/AdminRoutes'
// import AdminDashboard from './admin/AdminDashboard'
// import CreateCategory from './admin/CreateCategory'
// import CreateProduct from './admin/CreateProduct'
// import Products from './admin/Products'
// function App() {
 

//   return (
//     <>
//      < Header/>
//      <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/dashboard' element={<PrivateRoutes/>}>
//       <Route path='user' element={<Dashboard/>}/>
//       </Route>
//        <Route path='./user/Dashboard.jsx' element={<AdminRoutes/>}>
//        <Route path='admin/AdminDashboard.jsx' element={<AdminDashboard/>}/>
//        <Route path='admin/CreateCategory.jsx' element={<CreateCategory/>}/>
//        <Route path='admin/CreateProduct' element={<CreateProduct/>}/>
//       <Route path='admin/Products' element={<Products/>}/>
//       </Route>
//       <Route path='/cart' element={<Cartitems/>}/>
//       <Route path='/signup' element={<Signup/>}/>
//       <Route path='/signin' element={<Signin/>}/>
//       <Route path='/Forgotpass' element={<Forgotpassword/>}/>
//       {/* <Route path='/cart' element={</>}/> */}
//      </Routes>
//      <Footer/>
//     </>
//   )
// }

// export default App
