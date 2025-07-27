import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvide } from './context/auth.jsx';
import { CartProvider} from './context/cart.jsx'
import { SearchProvider } from './context/search.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <AuthProvide>
    <CartProvider>
      <SearchProvider>
    <App />
    </SearchProvider>
    </CartProvider>
    </AuthProvide>
  </BrowserRouter>
  </StrictMode>,
)
