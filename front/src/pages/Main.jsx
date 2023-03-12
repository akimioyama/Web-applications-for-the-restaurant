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
      
    }

    const api = "https://localhost:44343/api/Tables"
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    axios.get(api, config).then( function (respons) {
      console.log(respons.data)
      setTable(respons.data)
    })

  },[])

  const takeToken = (newRole) => {

  }

  return (
    <div className="main">
      {cookies.role == "user" || cookies.role  == "admin" ? <Map info={table}/> : <SingIn take={takeToken} />}
    </div>
  );
}

export {Main};
