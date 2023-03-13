import React, { useEffect, useState } from "react";
import { SingIn } from "../components/login/SingIn";
import { Map } from "../components/Map";
import { useCookies } from "react-cookie";
import axios from "axios";

function Main() {
  const [table, setTable] = useState([]);
  const [token, setToken] = useState();
  const [role, setRole] = useState("user");
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  useEffect(() => {
    if (cookies?.role != "user" || cookies?.role != "admin") {
    }

    const api = "https://localhost:44343/api/Tables";
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    axios.get(api, config).then(function (respons) {
      console.log(respons.data);
      setTable(respons.data);
    });
  }, []);

  const takeToken = (newRole) => {};
  const remove = () => {
    removeCookie("role");
    removeCookie("jwtToken");
  };
  const Acc = () => {
    let acc = "http://localhost:3000/acc";
    window.location.href = acc;
  };

  return (
    <div className="main">
      {cookies.role == "user" || cookies.role == "admin" ? (
        <Map info={table} />
      ) : (
        <SingIn take={takeToken} />
      )}
      {cookies.role == "user" || cookies.role == "admin" ? (
        <div className="outin">
          <button className="btn btn-red" onClick={remove}>
            Выйти
          </button>
        </div>
      ) : (
        ""
      )}
      {cookies.role == "admin" ? (
        <div className="outin">
          <button className="btn" onClick={Acc}>
            Аккаунты
          </button>
        </div>  
      ) : (
        ""
      )}
    </div>
  );
}

export { Main };
