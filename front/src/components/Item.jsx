import React from "react";
import axios from "axios";

const Item = ({ post }) => {

    const changeBook = () => {

    }
    const delBook = () => {
        const api = "https://localhost:44343/api/Booking?id=" + post.id
        axios.delete(api).then(function (respones) {
            window.location.reload();
        })
    }

  return (
    <div className="allBooking">
      <div className="allBooking_lf">
        <div>Время</div>
        <div>Имя</div>
        <div>Телефон</div>
      </div>
      <div className="allBooking_rg">
        <div>
          <textarea>{post.dateTime}</textarea>
        </div>
        <div>
          <textarea>{post.fio}</textarea>
        </div>
        <div>
          <textarea>{post.phone}</textarea>
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
