import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem } from "./MenuItem";
import { useCookies } from "react-cookie";


const MenuOrList = ({sessionId, change, table}) => {
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["role"])


  const getMenu = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    let api = "https://localhost:44343/api/Menu";
    axios.get(api, config).then(function (response) {
      console.log(response.data);
      setMenu(response.data);
    });
  };

  useEffect(() => {
    getMenu();
  }, []);

  const changeList = (newList) => {
    change(newList)
  }


  return (
    <div>
      <div className="menuItem_oo">
        {menu.map((q) => (
          <MenuItem key={q.id} info={q} table={table}  sessionId={sessionId.id} change={changeList}/>
        ))}
      </div>
    </div>
  );
};

export { MenuOrList };
