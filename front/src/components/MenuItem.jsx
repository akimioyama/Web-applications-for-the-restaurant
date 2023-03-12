import axios from "axios";
import React from "react";


const MenuItem = ({info, sessionId}) => {

    const addFood = () => {
        console.log(info.id , sessionId)

        let api = "https://localhost:44343/api/Orders"
        let conf = {
            sessionId: sessionId,
            menuItemId: info.id
        }

        axios.post(api, conf)

        
      }

    return (
        <div className="menuItem_oo_aa" key={info.id}>
            <div className="OrderItem_item_lf_mm">{info.name}</div>
            <div className="OrderItem_item_rg_mm">{info.price} руб</div>
            <div className="OrderItem_item_btn_mm">
              <button className="btn btn-mini-min" onClick={addFood}>+</button>
            </div>
          </div>
    )
}

export { MenuItem }