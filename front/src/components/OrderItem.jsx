import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";


const OrderItem = ({ info, sessionId, change,table }) => {

    const [newListOrder, setnewListOrder] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies(["role"])


  const deletOrder = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    console.log(info.id);
    let api = "https://localhost:44343/api/Orders?orderId=" + info.id;
    axios.delete(api, config).then(function () {
      let apii = "https://localhost:44343/api/Sessions?tableId=" + table;
      axios.get(apii, config).then(function (response) {
        setnewListOrder(response.data)
        let newR = response.data.orders
        change(newR)
      });
    });
  };

  return (
    <div className="OrderItem" key={info.id}>
      <div className="OrderItem_item_lf">{info.nameMenuItem}</div>
      <div className="OrderItem_item_rg">{info.actualPrice} руб</div>
      <div className="OrderItem_item_rg">
        <button className="btn btn-mini-min" onClick={deletOrder}>
          -
        </button>
      </div>
    </div>
  );
};

export { OrderItem };
