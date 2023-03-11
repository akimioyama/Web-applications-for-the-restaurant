import React, { useState, useEffect } from "react";
import { MyModal } from "../Modal/MyModal";

const SS = ({table, openInfo, children }) => {
  function qqq() {
    openInfo(true);
  }
  function openInfo(newQ) {
    setModalActive(true);
  }
  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState({})

  const Timetime =(q,w) =>{
    let result = ""
    result = q.replace("T", " ")
    result = result + "\n\n" + w
    return result
  }

  useEffect(() => {
    if(table?.isFree != undefined){
      setText(table)
    }
  }, [table])

  

  return (
    <div className={table?.isFree == true ? "ss" : "sss"}>
      <div className="ss1" onClick={qqq}>
        {children}
        <div className="ppp">
          {table?.dateTime == null ? "Нет ближайшей записи" : Timetime(table.dateTime, table.fio)}
        </div>
      </div>
      <MyModal text={text} active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export { SS };
