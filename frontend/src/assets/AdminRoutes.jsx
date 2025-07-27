/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";

export default function AdminRoutes()
{
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
    useEffect(()=>{
        const authCheck=()=>{
            fetch("https://backend-5ggv.onrender.com/auth/adminauth",{
                headers:{
                    "authorization":auth?.token
                }
            }).then((res1)=>{
                res1.json().then((res2)=>{
                    if(res1.ok)
                    {
                        setOk(true)
                    }
                    else
                    {
                        setOk(false)
                    }
                })
            })
        }
        if(auth?.token)
            authCheck()
    },[auth?.token])
    return ok?<Outlet/>:null
}