import React, { useEffect, useState } from "react";
import { SingIn } from "../components/login/SingIn";
import { Map } from "../components/Map";
import { useCookies } from "react-cookie";
import axios from 'axios';



function Main() {

  const [table, setTable] = useState([])
  const [token, setToken] = useState()
  const [role, setRole] = useState("user")
  const [cookies, setCookie, removeCookie] = useCookies(["role"])

  useEffect( () => {
    if(cookies?.role != "user" || cookies?.role != "admin") {
      setCookie("role", role, { path: "/"})
    }

    const api = "https://localhost:44343/api/Tables"
    axios.get(api).then( function (respons) {
      setTable(respons.data)
    })

  },[])

  const takeToken = (newRole) => {

  }

  return (
    <div className="main">
      {cookies.role == "user" ? <Map info={table}/> : <SingIn take={takeToken} />}
    </div>
  );
}

export {Main};
