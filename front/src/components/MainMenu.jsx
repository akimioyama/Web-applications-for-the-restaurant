import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AddFood } from "./AddFood";
import { MainMenuItem } from "./MaimMenuItem";

const MainMenu = () => {
  const [menu, setMenu] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  const getAllMenu = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let api = "https://localhost:44343/api/Menu";
    axios.get(api, config).then(function (response) {
      setMenu(response.data);
    });
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  const [temp, setTemp] = useState(false);
  const changeMenu = (newMenu) => {
    console.log("werw", newMenu);
    setTemp(true);
    setLook(false)
  };

  useEffect(() => {
    getAllMenu();
    setTemp(false);
  }, [temp]);

  const [look, setLook] = useState(false)
  const addFood = () => {
    if(look == false){
      setLook(true)
    }
    else {
      setLook(false)
    }
  }

  return (
    <div className="MainMenu">
      <div>
        <button className="btn" onClick={addFood}>Окно для добавления</button>
      </div>
      {look == true ? <AddFood change={changeMenu} /> : ""}
      {menu.map((q) => (
        <MainMenuItem key={q.id} info={q} change={changeMenu} />
      ))}
    </div>
  );
};

export { MainMenu };
