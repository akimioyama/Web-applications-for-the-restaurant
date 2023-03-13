import React, { useState, useEffect } from "react";
import { SingIn } from "../components/login/SingIn";
import { useCookies } from "react-cookie";
import { MainMenu } from "../components/MainMenu";

function Menu() {
  const [token, setToken] = useState();
  const [role, setRole] = useState("user");
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  useEffect(() => {
    if (cookies?.role != "user" || cookies?.role != "admin") {
    }
  }, []);
  const remove = () => {
    removeCookie("role");
    removeCookie("jwtToken");
  };
  const Acc = () => {
    let acc = "http://localhost:3000/acc";
    window.location.href = acc;
  };

  return (
    <div>
      {cookies.role == "user" || cookies.role == "admin" ? (
        <div className="outin">
          <button className="btn btn-red" onClick={remove}>
            Выйти
          </button>
        </div>
      ) : (
        ""
      )}
      {/* {cookies.role == "admin" ? (
        <button className="btn" onClick={Acc}>
          Аккаунты
        </button>
      ) : (
        ""
      )} */}
      {cookies.role == "user" || cookies.role == "admin" ? (
        <MainMenu />
      ) : (
        <SingIn />
      )}
      
    </div>
  );
}

export { Menu };
