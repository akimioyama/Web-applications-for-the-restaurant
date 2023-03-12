import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

const SingIn = ({ take }) => {
  const [token, setToken] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["jwtToken", "role"]);

  const login = () => {
    let api = "https://localhost:44343/api/Account/Login";

    let el1 = document.getElementById("001").value;
    let el2 = document.getElementById("002").value;

    let conf = {
      login: el1,
      password: el2,
    };
    axios.post(api, conf).then(function (respons) {
      setCookie("jwtToken", respons.data.jwtToken, { path: "/" });
      setCookie("role", respons.data.role, { path: "/" });
      window.location.reload();
    });
  };

  return (
    <div>
      <div className="SingIn">
        <div className="signin_left">
          <div>login</div>
          <div>password</div>
        </div>
        <div className="signin_rigth">
          <div>
            <input type="text" id="001" />
          </div>
          <div>
            <input type="password" name="" id="002" />
          </div>
        </div>
      </div>
      <div className="signin_btn">
        <button className="btn" onClick={login}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export { SingIn };
