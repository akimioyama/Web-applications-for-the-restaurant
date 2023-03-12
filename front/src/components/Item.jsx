import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


const Item = ({ post }) => {
  const [name, setName] = useState("");
  const [telepon, setTelepon] = useState("");
  const [date, setDate] = useState("");
  const [table, setTable] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["role"])


  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const teleponChange = (e) => {
    setTelepon(e.target.value);
  };
  const tableChange = (e) => {
    setTable(e.target.value);
  };

  const changeBook = () => {
    const api = "https://localhost:44343/api/Booking";

    let el1 = document.getElementById("01");
    let newdate = el1.value;

    let el2 = document.getElementById("02");
    let newtable = el2.value;

    let el3 = document.getElementById("03");
    let newname = el3.value;

    let el4 = document.getElementById("04");
    let newtel = el4.value;

    const conf = {
      id: post.id,
      tableId: newtable,
      dateTime: newdate,
      fio: newname,
      phone: newtel,
    };
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    axios.put(api, conf, config).then(function (respones) {
      // window.location.reload();
    });
    // console.log(conf)
  };
  const delBook = () => {
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    const api = "https://localhost:44343/api/Booking?id=" + post.id;
    axios.delete(api, config).then(function (respones) {
      window.location.reload();
    });
  };

  return (
    <div className="allBooking">
      <div className="allBooking_lf">
        <div>Время</div>
        <div>Номер столика</div>
        <div>Имя</div>
        <div>Телефон</div>
      </div>
      <div className="allBooking_rg">
        <div>
          <textarea
            id="01"
            defaultValue={post.dateTime}
            onChange={dateChange}
          ></textarea>
        </div>
        <div>
          <textarea
            id="02"
            defaultValue={post.tableId}
            onChange={tableChange}
          ></textarea>
        </div>
        <div>
          <textarea
            id="03"
            defaultValue={post.fio}
            onChange={nameChange}
          ></textarea>
        </div>
        <div>
          <textarea
            id="04"
            defaultValue={post.phone}
            onChange={teleponChange}
          ></textarea>
        </div>
      </div>
      <div className="allBooking_btn">
        <div>
          <button className="btn btn-mini" onClick={changeBook}>
            Изменить
          </button>
        </div>
        <div>
          <button className="btn btn-mini btn-red" onClick={delBook}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export { Item };
