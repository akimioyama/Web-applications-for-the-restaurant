import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";

const AddFood = ({change}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  const addAdd = () => {
    let api = "https://localhost:44343/api/Menu";
    let el1 = document.getElementById("0001").value;
    let el2 = document.getElementById("0002").value;
    let el3 = document.getElementById("0003").value;

    let conf = {
      id: 0,
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
    axios.post(api, conf, config).then(function () {
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

  return (
    <div>
      <div className="AddFood">
        <div className="AddFood_lf">
          <div>Название</div>
          <div>Состав</div>
          <div>Цена</div>
        </div>
        <div className="AddFood_rg">
          <div>
            <input id="0001" type="text" />
          </div>
          <div>
            <input id="0002" type="text" />
          </div>

          <div>
            <input id="0003" type="text" />
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

export { AddFood };
