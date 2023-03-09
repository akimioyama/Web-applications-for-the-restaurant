import React, { useState } from "react";
import { MyModal } from "../Modal/MyModal";

const SS = ({ openInfo, children, ...props }) => {
  function qqq() {
    openInfo(true);
  }
  function openInfo(newQ) {
    setModalActive(true);
  }
  const [modalActive, setModalActive] = useState(false);

  return (
    <div class="ss">
      <div class="ss1" onClick={qqq}>
        {children}
      </div>
      <MyModal text={children} active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export { SS };
