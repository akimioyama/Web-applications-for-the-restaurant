import React from "react";
import { AccItem } from "./AccItem";

const AccList = ({ listAcc, change, closeclose }) => {

  const changeAcc = (rt) => {
    change(rt)
  }
  const close = (qq) => {
    closeclose(qq)
  }

  return (
    <div>
      {listAcc?.map((q) => {
        if (q.id != 1) {
          return(
            <AccItem key={q.id} item={q} change={changeAcc} close={close}/>
          )
        }
      })}
    </div>
  );
};

export { AccList };
