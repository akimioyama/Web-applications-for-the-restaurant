import axios from "axios";
import React, { useEffect, useState } from "react";
import { Sesion } from "./Sesion";
import { useCookies } from "react-cookie";


const LookSesion = ({ info }) => {
  const [look, setLook] = useState(false);
  const [newPost, setNewPost] = useState([])
  const [price, setPrice] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(["role"])


  const qwe = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    const api = "https://localhost:44343/api/Sessions?tableId=" + info.id
    axios.get(api, config).then(function (response) {
      setNewPost(response.data)
      setLook(true)
    })
  };
  const asd = () => {
    setLook(false);
  };

  const [temp, setTemp] = useState(false)
  const changePost = (newPost1) => {
    console.log("сто проц поменял", newPost1)
    setTemp(true)
  }

  useEffect(()=>{
    qwe()
    setTemp(false)
  }, [temp])

  const zxc = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    const api = "https://localhost:44343/api/Sessions"
    let conf = {
      id: info.session.id,
      paymentState: false
    }
    console.log(info.session.id)
    axios.put(api, conf, config).then(function(){
      window.location.reload();
    })
  }
  const uuu = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    let api = "https://localhost:44343/api/Sessions/GetCheck?id=" + info.session.id
    console.log(info.session.id)
    axios.get(api, config).then(function (response){
      setPrice(response.data)
    })
  }

  return (
    <div className="LookSession">
      <div>Текущая сессия</div>
      {price == "" ? "" : <div>Сумма {price}</div>}
      <button className="btn btn-mini" onClick={qwe}>
        Показать
      </button>
      <button className="btn btn-mini" onClick={asd}>
        Скрыть
      </button>
      <button className="btn btn-red btn-mini" onClick={uuu}>
        Итог
      </button>
      <button className="btn btn-red btn-mini" onClick={zxc}>
        Расчитать
      </button>
      {look == true ? <Sesion sesion={newPost} change={changePost} table={info.id}/> : ""}
    </div>
  );
};

export { LookSesion };
