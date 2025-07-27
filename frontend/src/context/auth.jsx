import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
// import { children } from "react";
import { createContext } from "react";

const AuthContext=createContext()

const AuthProvide=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    })

useEffect(()=>{
    const data=localStorage.getItem("auth")
    if (data)
    {
        const parseData=JSON.parse(data)
        setAuth({
            ...auth,
            user:parseData.user,
            token:parseData.token
        })
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
return(
    <AuthContext.Provider value={[auth,setAuth]}>
        {children}
    </AuthContext.Provider>
)
}
const useAuth=()=>useContext(AuthContext)

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth,AuthProvide }