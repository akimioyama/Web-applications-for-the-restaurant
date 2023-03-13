import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";

const AddUser = ({change}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  const addAdd = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let api = "https://localhost:44343/api/Users";
    let el1 = document.getElementById("10001").value;
    let el2 = document.getElementById("20002").value;
    let el3 = document.getElementById("30003").value;
    let el4 = document.getElementById("40004").value;

    let conf = {
      fio: el1,
      role: el2,
      login: el3,
      password: el4,
    };

    axios.post(api, conf, config).then(function () {
      let jwt = cookies?.jwtToken;
      let config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + jwt,
        },
      };
      let api = "https://localhost:44343/api/Users";
      axios.get(api, config).then(function (respons) {
        change(respons.data)
      })
    });
  };

  return (
    <div>
      <div className="AddFood">
        <div className="AddFood_lf">
          <div>Фио</div>
          <div>Роль</div>
          <div>Логин</div>
          <div>Пароль</div>
        </div>
        <div className="AddFood_rg">
          <div>
            <input id="10001" type="text" />
          </div>
          <div>
            <input id="20002" type="text" />
          </div>

          <div>
            <input id="30003" type="text" />
          </div>
          <div>
            <input id="40004" type="text" />
          </div>
        </div>
      </div>
      <div>
        <button className="btn" onClick={addAdd}>
          Добавить!
        </button>
      </div>
    </div>
  );
};

export { AddUser };
