import axios from "axios";
import React, { useEffect, useState } from "react";
import { Sesion } from "./Sesion";

const LookSesion = ({ info }) => {
  const [look, setLook] = useState(false);
  const [newPost, setNewPost] = useState([])

  const qwe = () => {
    
    const api = "https://localhost:44343/api/Sessions?tableId=" + info.id
    axios.get(api).then(function (response) {
      console.log(response.data)
      setNewPost(response.data)
      setLook(true)
    })
  };
  const asd = () => {
    setLook(false);
  };

  const changePost = (newPost1) => {
    console.log("Sesion", newPost1)
    qwe()
  }

  const zxc = () => {
    const api = "https://localhost:44343/api/Sessions"
    let conf = {
      id: info.session.id,
      paymentState: false
    }
    console.log(info.session.id)
    axios.put(api, conf).then(function(){
      window.location.reload();
    })
  }

  return (
    <div className="LookSession">
      <div>Текущая сессия</div>
      <button className="btn btn-mini" onClick={qwe}>
        Показать
      </button>
      <button className="btn btn-mini" onClick={asd}>
        Скрыть
      </button>
      <button className="btn btn-red btn-mini" onClick={zxc}>
        Расчитать
      </button>
      {look == true ? <Sesion sesion={newPost} change={changePost} table={info.id}/> : ""}
    </div>
  );
};

export { LookSesion };
