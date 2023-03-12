import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem } from "./MenuItem";

const MenuOrList = ({sessionId}) => {
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const getMenu = () => {
    let api = "https://localhost:44343/api/Menu";
    axios.get(api).then(function (response) {
      console.log(response.data);
      setMenu(response.data);
    });
  };

  useEffect(() => {
    getMenu();
  }, []);


  return (
    <div>
      <div className="menuItem_oo">
        {menu.map((q) => (
          <MenuItem key={q.id} info={q} sessionId={sessionId.id} />
        ))}
      </div>
    </div>
  );
};

export { MenuOrList };
