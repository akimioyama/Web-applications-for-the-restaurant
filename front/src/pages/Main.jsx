import React, { useEffect, useState } from "react";
import { SingIn } from "../components/login/SingIn";
import { Map } from "../components/Map";
import { useCookies } from "react-cookie";

function Main() {

  const [token, setToken] = useState()
  const [role, setRole] = useState("user")
  const [cookies, setCookie, removeCookie] = useCookies(["role"])

  useEffect(() => {
    if(cookies?.role != "user" || cookies?.role != "admin") {
      setCookie("role", role, { path: "/"})
    }
  },[])

  return (
    <div className="main">
      {cookies.role == "user" ? <Map/> : <SingIn />}
    </div>
  );
}

export {Main};
