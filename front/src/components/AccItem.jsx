import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

const AccItem = ({ item, change, close }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);
  const [look, setLook] = useState(false);

  const changeAcc = () => {
    if (look == false) {
      setLook(true);
    } else {
      setLook(false);
    }
  };
  const delAcc = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let api = "https://localhost:44343/api/Users?id=" + item.id;
    axios.delete(api, config).then(function () {
      let jwt = cookies?.jwtToken;
      let config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + jwt,
        },
      };
      let api = "https://localhost:44343/api/Users";
      axios.get(api, config).then(function (respons) {
        change(respons.data);
      });
    });
  };
  const changeAccAcc = () => {
    const el1 = document.getElementById("121").value;
    const el2 = document.getElementById("132").value;
    const el3 = document.getElementById("143").value;
    const el4 = document.getElementById("154").value;

    if (fio == "") {
      setFio(el1);
    }
    if (role == "") {
      setRole(el2);
    }
    if (login == "") {
      setLogin(el3);
    }
    if (password == "") {
      setPassword(el4);
    }

    let conf = {
      id: item.id,
      fio: el1,
      role: el2,
      login: el3,
      password: el4,
    };
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let api = "https://localhost:44343/api/Users";
    axios.put(api, conf, config).then(function () {
      let jwt = cookies?.jwtToken;
      let config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + jwt,
        },
      };
      let api = "https://localhost:44343/api/Users";
      axios.get(api, config).then(function (respons) {
        change(respons.data);
        close(false)
      });
    });
  };
  const [fio, setFio] = useState("");
  const changeName = (e) => {
    setFio(e.target.value);
  };
  const [role, setRole] = useState("");
  const changeText = (e) => {
    setRole(e.target.value);
  };
  const [login, setLogin] = useState("");
  const changePrice = (e) => {
    setLogin(e.target.value);
  };
  const [password, setPassword] = useState("");
  const changepassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="accItem">
      <div className="accItem_n">
          <div>ID:</div>
          <div className="accItem_fio">{item.id}</div>
        </div>
        <div className="accItem_n">
          <div>ФИО:</div>
          <div className="accItem_fio">{item.fio}</div>
        </div>
        <div className="accItem_n">
          <div>Роль:</div>
          <div className="accItem_fio">{item.role}</div>
        </div>
        <div className="accItem_n">
          <div>Логин:</div>
          <div className="accItem_fio">{item.login}</div>
        </div>
        <div className="accItem_n">
          <div>Пароль:</div>
          <div className="accItem_fio">{item.password}</div>
        </div>
        <button className="btn" onClick={changeAcc}>
          Изменить
        </button>
        {/* <button className="btn btn-red" onClick={delAcc}>
          Удалить
        </button> */}
        {look == true ? (
          <div className="changeFood">
            <div className="AddFood_rg">
              <div>
                <input
                  id="121"
                  type="text"
                  defaultValue={item.fio}
                  onChange={changeName}
                />
              </div>
              <div>
                <input
                  id="132"
                  type="text"
                  defaultValue={item.role}
                  onChange={changeText}
                />
              </div>
              <div>
                <input
                  id="143"
                  type="text"
                  defaultValue={item.login}
                  onChange={changePrice}
                />
                <input
                  id="154"
                  type="text"
                  defaultValue={item.password}
                  onChange={changepassword}
                />
              </div>
            </div>
            <button className="btn" onClick={changeAccAcc}>
              Изменить!
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export { AccItem };
