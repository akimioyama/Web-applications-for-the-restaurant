import React, { useState, useEffect } from "react";
import { SingIn } from "../components/login/SingIn";
import { useCookies } from "react-cookie";
import { MenuList } from "../components/MenuList";

function Menu() {

    const [token, setToken] = useState()
    const [role, setRole] = useState("user")
    const [cookies, setCookie, removeCookie] = useCookies(["role"])

    useEffect(() => {
        if(cookies?.role != "user" || cookies?.role != "admin") {
          setCookie("role", role, { path: "/"})
        }
      },[])

    return (
      <div>
        {role ? <MenuList /> : <SingIn />}
        
      </div>
    );
  }
  
  export { Menu };
  