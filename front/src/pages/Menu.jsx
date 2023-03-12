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
    removeCookie("role")
    removeCookie("jwtToken")
  }

  return (
    <div>
      {cookies.role == "user" || cookies.role == "admin" ? (
        <MainMenu />
      ) : (
        <SingIn />
      )}
      {cookies.role == "user" || cookies.role == "admin" ? (
        <div className="outin">
        <button className="btn" onClick={remove}>Выйти</button>
      </div>
      ) : ""}
    </div>
  );
}

export { Menu };
