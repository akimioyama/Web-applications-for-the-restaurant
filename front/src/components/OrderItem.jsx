import axios from "axios";
import React, { useState } from "react";

const OrderItem = ({ info, sessionId, change,table }) => {

    const [newListOrder, setnewListOrder] = useState([])

  const deletOrder = () => {
    console.log(info.id);

    // let apii = "https://localhost:44343/api/Sessions?tableId=" + table;
    //   axios.get(apii).then(function (response) {
    //     setnewListOrder(response.data)
    //     change(response.data.orders)
    //     console.log(response.data.orders)
    //   });

    let api = "https://localhost:44343/api/Orders?orderId=" + info.id;
    axios.delete(api).then(function () {
      let apii = "https://localhost:44343/api/Sessions?tableId=" + table;
      axios.get(apii).then(function (response) {
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
