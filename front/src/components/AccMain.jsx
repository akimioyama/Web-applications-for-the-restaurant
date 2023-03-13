import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AccList } from "./AccList";
import { AddUser } from "./AddUser";

const AccMain = ({change}) => {
  const [acc, setAcc] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  const RestApi = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let api = "https://localhost:44343/api/Users";
    axios.get(api, config).then(function (respons) {
      setAcc(respons.data);
    });
  };
  const accChange = (rt) => {
    setAcc(rt)
  };



  useEffect(() => {
    RestApi();
  }, []);

  const [look, setLook] = useState(false);
  const createAcc = () => {
    if (look == false) {
      setLook(true);
    } else {
      setLook(false);
    }
  };
  const [temp, setTemp] = useState(true)

  useEffect(()=>{
    setLook(false)
  }, [temp])

  const close = (qwe) => {
    setTemp(qwe)
  }

  return (
    <div>
      <button className="btn" onClick={createAcc}>
        Добавить нового
      </button>
      {look == true ? <AddUser change={accChange}/> : (
        ""
      )}
      <AccList listAcc={acc} change={accChange} closeclose={close} />
    </div>
  );
};

export { AccMain };
