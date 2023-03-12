import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

const MainMenuItem = ({ info, change }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  const removeMenuItem = () => {
    console.log(info.id);
    let api = "https://localhost:44343/api/Menu?id=" + info.id;
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    axios.delete(api, config).then(function (respons) {
      let jwt = cookies?.jwtToken;
      let config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + jwt,
        },
      };
      let api = "https://localhost:44343/api/Menu";
      axios.get(api, config).then(function (response) {
        change(response.data);
      });
    });
  };

  const [look, setLook] = useState(false);
  const changeMenuItem = () => {
    if (look == false) {
      setLook(true);
    } else {
      setLook(false);
    }
  };

  const [name, setName] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  const [text, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  const [price, setPrice] = useState("");
  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changeFoodFood = () => {
    const el1 = document.getElementById("12").value;
    const el2 = document.getElementById("13").value;
    const el3 = document.getElementById("14").value;

    if (name == "") {
      setName(el1);
    }
    if (text == "") {
      setText(el2);
    }
    if (price == "") {
      setPrice(el3);
    }

    let conf = {
      id: info.id,
      name: el1,
      composition: el2,
      pictureName: null,
      price: el3,
    };
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let api = "https://localhost:44343/api/Menu";
    axios.put(api, conf, config).then(function (respons) {
      let jwt = cookies?.jwtToken;
      let config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + jwt,
        },
      };
      let api = "https://localhost:44343/api/Menu";
      axios.get(api, config).then(function (response) {
        change(response.data);
      });
    });
    setLook(false)
  };

  return (
    <div className="MainMenuItem">
      <div className="MainMenuItem_header">
        <h3>{info.name}</h3>
      </div>
      <div className="MainMenuItem_footer">
        <div className="MainMenuItem_footer_lf">{info.composition}</div>
        <div className="MainMenuItem_footer_rg">
          <span className="lplp">{info.price} рублей</span>
        </div>
      </div>
      {cookies.role == "admin" ? (
        <div className="jiji">
          <button className="btn" onClick={changeMenuItem}>
            Изменить
          </button>
          <button className="btn btn-red" onClick={removeMenuItem}>
            Удалить
          </button>
        </div>
      ) : (
        ""
      )}
      {look == true ? (
        <div className="changeFood">
          <div className="AddFood_rg">
            <div>
              <input
                id="12"
                type="text"
                defaultValue={info.name}
                onChange={changeName}
              />
            </div>
            <div>
              <input
                id="13"
                type="text"
                defaultValue={info.composition}
                onChange={changeText}
              />
            </div>
            <div>
              <input
                id="14"
                type="text"
                defaultValue={info.price}
                onChange={changePrice}
              />
            </div>
          </div>
          <button className="btn" onClick={changeFoodFood}>
            Изменить!
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { MainMenuItem };
