import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";


const MenuItem = ({ info, sessionId, change, table }) => {

  const [cookies, setCookie, removeCookie] = useCookies(["role"])

  const addFood = () => {
    console.log(info.id, sessionId);

    let api = "https://localhost:44343/api/Orders";
    let conf = {
      sessionId: sessionId,
      menuItemId: info.id,
    };
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }

    axios.post(api, conf, config).then(function (response) {
      let apii = "https://localhost:44343/api/Sessions?tableId=" +table;
      axios.get(apii, config).then(function (response) {
        let newR = response.data.orders;
        change(newR);
      });
    });
  };

  return (
    <div className="menuItem_oo_aa" key={info.id}>
      <div className="OrderItem_item_lf_mm">{info.name}</div>
      <div className="OrderItem_item_rg_mm">{info.price} руб</div>
      <div className="OrderItem_item_btn_mm">
        <button className="btn btn-mini-min" onClick={addFood}>
          +
        </button>
      </div>
    </div>
  );
};

export { MenuItem };
