import React, { useState } from "react";
import classes from "./MyModal.module.css";
import "./MYModal.css";
import axios from "axios";
import { ItemList } from "../../ItemList";
import { LookSesion } from "../../LookSesion";
import { useCookies } from "react-cookie";


const MyModal = ({ active, setActive, text }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["role"])

  const changeStatus = () => {
    let status;
    if (text.isFree == true) {
      status = false;
    } else {
      status = true;
    }
    const api = "https://localhost:44343/api/Tables";
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    const conf = {
      id: text.id,
      isFree: status,
    };

    axios.put(api, conf, config).then(function (response) {
      window.location.reload();
    });
  };

  const [name, setName] = useState("");
  const [telepon, setTelepon] = useState("");
  const [date, setDate] = useState("");
  const Booking = () => {
    const api = "https://localhost:44343/api/Booking";
    let datetime = date.replace(" ", "T");
    const conf = {
      id: 0,
      tableId: text.id,
      dateTime: datetime,
      fio: name,
      phone: telepon,
    };
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    axios.post(api, conf, config).then(function (response) {
      setDate("")
      setTelepon("")
      setName("")
    });
  };
  const handleInputDate = (e) => {
    setDate(e.target.value);
  };
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputTelopon = (e) => {
    setTelepon(e.target.value);
  };

  const [allBooking, setAllBooking] = useState([]);
  const getAll = () => {
    const api = "https://localhost:44343/api/Booking?TableId=" + text.id;
    let jwt = cookies?.jwtToken;
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    axios.get(api, config).then(function (response) {
      console.log(response.data);
      setAllBooking(response.data);
    });
  };
  const close = () => {
    setAllBooking([]);
  };
  const newSession = () => {
    console.log(text.id);
    let jwt = cookies?.jwtToken;

    let config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      }
    }
    let api = "https://localhost:44343/api/Sessions/" + text.id;
    axios.get(api, config).then(function (response) {
      window.location.reload();
    });
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={classes.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contentMyModal">
          <div>Столик № {text.id}</div>
          <div>Столки сейчас: {text.isFree == true ? "свободен" : "занят"}</div>
          <div>
            <label>Сменить статус </label>
            <button className="btn btn-mini" onClick={changeStatus}>
              Сменить статус
            </button>
          </div>
          <br />
          {text?.session != null ? <LookSesion info={text} /> : ""}
          {text?.session == null ? (
            <button className="btn btn-mini" onClick={newSession}>
              Посадить
            </button>
          ) : (
            ""
          )}
          <br />
          <div className="Booking">
            <div className="BookingLeft">
              <div>Когда</div>
              <div>Имя</div>
              <div>Телефон</div>
            </div>
            <div className="BookingRigth">
              <div>
                <input
                  type="datetime"
                  value={date}
                  onChange={handleInputDate}
                />
              </div>
              <div>
                <input type="text" value={name} onChange={handleInputName} />
              </div>
              <div>
                <input
                  type="text"
                  value={telepon}
                  onChange={handleInputTelopon}
                />
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-mini" onClick={Booking}>
              Записать
            </button>
          </div>
          <br />
          <div>Записи</div>
          <button className="btn btn-mini" onClick={getAll}>
            Показать
          </button>

          <ItemList posts={allBooking} />
          <button className="btn btn-mini" onClick={close}>
            Скрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export { MyModal };
