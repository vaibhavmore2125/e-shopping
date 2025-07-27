/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect ,useState} from "react";

const CartContext=createContext()

const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const existingcartitem=localStorage.getItem("cart")
        if(existingcartitem)
        {
            setCart((JSON).parse((existingcartitem)))
        }
    },[])

    return (
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    )
}
const useCart=()=>useContext(CartContext)
export {useCart,CartProvider}